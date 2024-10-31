<?php
if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    $otvet_serv = json_encode(
        array(
            'text' => 'Возникла ошибка при отправке данных'
        ));
    die($otvet_serv);
}


if( !isset($_POST["phone"]))
{
    $otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму', 'status' => false));
    die($otvet_serv);
}
$user_Phone = $_POST["phone"];

//if(!is_numeric($user_Phone))
//{
//    $otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр',
//        'status' => false));
//    die($otvet_serv);
//}

$to_Email = "brest@result.estate";
$subject = 'Запрос обратного звонка ' . $user_Phone . '<br/> имя '
    . $_POST["user_name"] .  '<br/> тип звонка ' . $_POST["phone_type"]
    .  '<br/> Дом ' . $_POST["house"]
    .  '<br/> Этаж дома ' . $_POST["date"]
    .  '<br/>Количество комнат ' . $_POST["room"]
    .  '<br/> Площадь, м² ' . $_POST["house_area"]
    .  '<br/> Цена, BYN ' . $_POST["house_price"];

if( !isset($_POST["footer_phone"])){
    $subject = 'Запрос обратного звонка ' . $_POST["footer_phone"];
}

if(!mail($to_Email, $subject,  "From:  \r\n" . $user_Phone))
{
    $otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.', 'status' => false));
    die($otvet_serv);
}else{
    $otvet_serv = json_encode(array('text' => 'Спасибо!  ваше сообщение отправлено.', 'status' => true));
    die($otvet_serv);
}
