<?php

    /*
        Список адресов
    */
    $recipients = array(
        "tkachuk.olexiy@gmail.com",
        "info.zanaves@gmail.com"
    );





    if (!isset($_POST['formname'])) exit;

    $text_message ='';


    if ($_POST['formname']=='popup'
        && isset($_POST['name'])
        && isset($_POST['phone'])
    ) {


        $form_name = htmlspecialchars(trim($_POST['name']));
        $form_phone = htmlspecialchars(trim($_POST['phone']));

        $text_message = "
            Новое сообщение на сайте.<br>
            Форма 'Всплывающее окно - Записаться на замер'<br><br>

            Имя: ".$form_name ." <br>
            Номер телефона: ".$form_phone." <br>
        ";
    }

    if ($_POST['formname']=='calc'
        && isset($_POST['name'])
        && isset($_POST['phone'])
        && isset($_POST['question'])

    ) {


        $form_name = htmlspecialchars(trim($_POST['name']));
        $form_phone = htmlspecialchars(trim($_POST['phone']));
        $form_question = htmlspecialchars(trim($_POST['question']));
        $form_size = htmlspecialchars(trim($_POST['size']));

        $text_message = "
            Новое сообщение на сайте.<br>
            Форма 'Узнайте стоимость роллет за 15 минут'<br><br>

            Имя: ".$form_name ." <br>
            Номер телефона: ".$form_phone." <br>
            Количество окон: ".$form_question." <br>
            Размеры: ".$form_size." <br>

        ";
    }

    if ($_POST['formname']=='credit'
        && isset($_POST['name'])
        && isset($_POST['phone'])
    ) {

        $form_name = htmlspecialchars(trim($_POST['name']));
        $form_phone = htmlspecialchars(trim($_POST['phone']));

        $text_message = "
            Новое сообщение на сайте.<br>
            Форма 'Всплывающее окно - Консультант перезвонит вам через 15 минут'<br><br>
            Имя: ".$form_name." <br>
            Номер телефона: ".$form_phone." <br>
        ";
    }


    if ($_POST['formname']=='advice'
        && isset($_POST['name'])
        && isset($_POST['phone'])
    ) {

        $form_name = htmlspecialchars(trim($_POST['name']));
        $form_phone = htmlspecialchars(trim($_POST['phone']));

        $text_message = "
            Новое сообщение на сайте.<br>
            Форма 'Получить консультацию'<br><br>

            Имя: ".$form_name." <br>
            Номер телефона: ".$form_phone." <br>
        ";
    }

    if ($_POST['formname']=='question'
        && isset($_POST['name'])
        && isset($_POST['phone'])
        && isset($_POST['question'])
    ) {

        $form_name = htmlspecialchars(trim($_POST['name']));
        $form_phone = htmlspecialchars(trim($_POST['phone']));
        $form_question = htmlspecialchars(trim($_POST['question']));

        $text_message = "
            Новое сообщение на сайте.<br>
            Форма 'Задать вопрос'<br><br>

            Имя: ".$form_name." <br>
            Номер телефона: ".$form_phone." <br>
            Вопрос: ".$form_question." <br>
        ";
    }

    $subject = "Новая заявка по залогу!";
    $header = "Content-type: text/html\r\n";

    $email_to = implode(',', $recipients);

    $retval = mail ($email_to,$subject,$text_message,$header);

?>
