<?php

$connect = mysqli_connect('http://localhost:8888', 'alanjohnson', 'alanjohnson', 'alanjohnson')

if(mysqli_connect_errno()){
    exit('failed to connect to MySql:' . mysqli_connect)
}