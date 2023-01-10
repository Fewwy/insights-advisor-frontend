#!/bin/bash
set -e
set -x

if [ "${BRANCH}" = "master" ]
then
    for env in ci qa
    do
        echo "PUSHING ${env}-beta"
        rm -rf ./dist/.git
        .travis/release.sh "${env}-beta"
    done
fi


if [ "${BRANCH}" = "master-stable" ]
then
    for env in ci qa
    do
        echo "PUSHING ${env}-stable"
        rm -rf ./dist/.git
        .travis/release.sh "${env}-stable"
    done
fi

if [[ "${BRANCH}" = "prod-beta" || "${BRANCH}" = "prod-stable" ]]; then
    echo "PUSHING ${BRANCH}"
    rm -rf ./build/.git
    .travis/release.sh "${BRANCH}"
fi
