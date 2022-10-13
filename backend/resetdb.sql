drop database neuron;
create database neuron;
use neuron;
source /Users/9008872C/Projet3/2022-09-JS-PARIS-NEURON/backend/neurondb.sql
source /Users/9008872C/Projet3/2022-09-JS-PARIS-NEURON/backend/test.sql
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
