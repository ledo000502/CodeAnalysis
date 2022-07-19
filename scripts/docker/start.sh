#!/bin/bash

CURRENT_SCRIPT_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")";pwd)
TCA_SCRIPT_ROOT=${TCA_SCRIPT_ROOT:-"$( cd "$(dirname $CURRENT_SCRIPT_PATH)"; pwd )"}
TCA_INIT_DATA=${TCA_INIT_DATA:-"false"}

# server config environment variables
export DAEMON=False
export SERVER_ACCESS_LOG="-"
export SERVER_ERROR_LOG="-"

source $TCA_SCRIPT_ROOT/utils.sh
source $TCA_SCRIPT_ROOT/config.sh
source $TCA_SCRIPT_ROOT/base/install_db.sh
source $TCA_SCRIPT_ROOT/base/install_nginx.sh
source $TCA_SCRIPT_ROOT/server/init_config.sh
source $TCA_SCRIPT_ROOT/server/init_data.sh
source $TCA_SCRIPT_ROOT/web/init.sh

function init_directory() {
    mkdir -p /var/log/tca/supervisord
    mkdir -p /var/log/tca/mariadb
    mkdir -p /var/opt/tca/mariadb
    mkdir -p /var/opt/tca/redis
    mkdir -p /var/log/tca/redis
    chown -R mysql:mysql /var/log/tca/mariadb /var/opt/tca/mariadb

    if [ ! -h "/var/log/tca/servers" ]; then
        ln -s /CodeAnalysis/server/logs /var/log/tca/servers
    fi

    if [ ! -f "/etc/tca/config.sh" ]; then
        cp /CodeAnalysis/scripts/config.sh /etc/tca/config.sh
    else
        mv /CodeAnalysis/scripts/config.sh /CodeAnalysis/scripts/config.sh.bak
        ln -s /etc/tca/config.sh /CodeAnalysis/scripts/config.sh
    fi
}

function start_db_and_init_data() {
    if [ $TCA_INIT_DATA == "true" ]; then
        init_directory
        if [ ! -d "/var/opt/tca/mariadb/mysql" ]; then
            mysql_install_db --user=mysql --datadir=/var/opt/tca/mariadb
        fi
        start_mariadb_with_docker
        config_redis
        init_server_db_and_data
    fi
    init_web_config
    config_nginx
    clean_server_pid
}

function stop_db() {
    force_kill "mariadbd\|mysqld"
}

start_db_and_init_data
stop_db
supervisord -n -c /CodeAnalysis/scripts/docker/supervisord.conf