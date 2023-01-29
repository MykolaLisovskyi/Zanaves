/*
  ОБРАБОТЧИК ОШИБОК
*/
function showError(error, element) {
  if (
    $(element)
      .parent()
      .find(".valerror").length !== 0
  )
    return false;
  if ($(element).attr("name") == "DATA[NAME]") {
    message = "Введите имя";
  } else if ($(element).attr("name") == "DATA[PHONE_MOBILE]") {
    message = "Введите номер телефона";
  }
  $(element)
    .parent()
    .prepend("<div class='valerror'>" + message + "</div>");
  return true;
}

new WOW().init();

var windowIsOpen = false;

setTimeout(function() {
  openModalWindow("modal-popup");
}, 20000);

/*
    Модальные окна
*/

(function() {
  function openModalWindow(id) {
    if (windowIsOpen) return;
    windowIsOpen = true;
    var modal = $("#" + id);
    var dark = $(modal).find(".modal__dark");
    var win = $(modal).find(".modal__window");
    $(modal).show();
    $(dark).fadeIn(300);
    $(win).fadeIn(500);
  }
  window.openModalWindow = openModalWindow;
  $(".modal__close, .modal__dark").on("click", function() {
    windowIsOpen = false;
    var modal = $(this).closest(".modal");
    var dark = $(modal).find(".modal__dark");
    var win = $(modal).find(".modal__window");
    $(dark).fadeOut(300);
    $(win).fadeOut(500);
    setTimeout(function() {
      $(modal).hide();
    }, 500);
  });

  $("[data-modal]").on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-modal");
    openModalWindow(id);
  });
})();

/*
    Плавная прокрутка
*/
(function() {
  function scrollTo(id) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + id).offset().top
      },
      1100
    );
  }
  $("[data-scroll]").on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-scroll");
    scrollTo(id);
  });
})();

/*
    Кнопка "Вверх"
*/
(function() {
  function ifScrollUp() {
    if ($(this).scrollTop() > 250) {
      $(".scrollUp").addClass("scrollUp_show");
    } else {
      $(".scrollUp").removeClass("scrollUp_show");
    }
  }
  $(window).scroll(ifScrollUp);
  ifScrollUp();
  $(".scrollUp").on("click", function(e) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0
      },
      1100
    );
  });
})();

function validForm(data) {
  for (var i = 0; i < data.length; i++) {
    if ($.trim(data[i].value) === "") return false;
  }
  return true;
}

/*
    Форма "Просчет суммы"
*/
(function() {
  $("#form-calc")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        "DATA[NAME]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        "DATA[PHONE_MOBILE]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
              size: $(form)
                  .find(".size")
                  .val(),
            question: $(form)
              .find(".question")
              .val(),
            formname: "calc"
          },
          success: function() {
            PopUpShow3();

          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text, .textarea")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/*
    Форма "Просчет суммы 2"
*/
(function() {
  $("#form-popup")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        "DATA[NAME]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        "DATA[PHONE_MOBILE]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            formname: "popup"
          },
          success: function() {
            PopUpShow3();
            PopUpHide();

          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text, .textarea")
          .prop("disabled", true)
          .val("");
          PopUpShow3();
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/*
    Форма "Оформить кредит"
*/
(function() {
  $("#form-credit")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        "DATA[NAME]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        "DATA[PHONE_MOBILE]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            formname: "credit"
          },
          success: function() {
            PopUpShow3();
            PopUpHide2();

          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text, .textarea")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/*
    Форма "Получить консультацию"
*/
(function() {
  $("#form-advice")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        "DATA[NAME]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        "DATA[PHONE_MOBILE]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            formname: "advice"
          },
          success: function() {
            $(form)
              .siblings(".formcomplete_ok")
              .slideDown(500);
            ga("send", "event", "consult", "get");
            fbq("track", "Lead");
          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text, .textarea")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/*
    Форма "Задать вопрос"
*/
(function() {
  $("#form-question")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        "DATA[NAME]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        "DATA[PHONE_MOBILE]": {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),

            question: $(form)
              .find(".question")
              .val(),
            formname: "question"
          },
          success: function() {
          PopUpShow3();
          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text, .textarea")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/*
    Поля ввода для номеров телефона
*/
(function() {
  $(".phone-input").mask("+38 (000) 000 00 00", {
    placeholder: "+38 (___) ___ __ __"
  });
})();
