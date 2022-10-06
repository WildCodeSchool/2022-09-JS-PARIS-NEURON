drop database neuron;
create database neuron;
use neuron;
source /home/yoh/code/projets/projet_3/2022-09-JS-PARIS-NEURON/backend/neurondb.sql;
source /home/yoh/code/projets/projet_3/2022-09-JS-PARIS-NEURON/backend/test.sql;
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
