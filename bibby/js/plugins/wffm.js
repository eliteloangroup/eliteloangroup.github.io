var wffm = (function() {
    var dog, self;

    return {
        settings: {
            validator: 'span.scfValidatorRequired',
            valreq: '.scfValidatorRequired:visible',
            required: 'span.scfRequired',
            label: 'label',
            submit: '.scfSubmitButton',
            border: 'borderRequired',
            summary: '.scfValidationSummary'
        },

        messages: {
            checkbox: '<li>Please select one or more options below</li>',
            radiobox: '<li>Please select one of the following optons below</li>',
            textbox: '<span><span class="vh"> is</span> (required)</span>',
            require: ' is a required field',
            select: ' must require a selected value',
            multisel: ' must have value(s) selected'
        },

        classes: {
            lists: '.scfCheckBoxList',
            radios: '.scfRadioButtonList',
            textfield: '.scfSingleLineTextBox',
            textarea: '.scfMultipleLineTextBox',
            datepicker: '.scfDatePickerTextBox',
            mobile: '.scfSmsTelephoneTextBox',
            telephone: '.scfTelephoneTextBox',
            emailfield: '.scfEmailTextBox',
            selectbox: '.scfDropList',
            password: '.scfPasswordTextBox',
            confirm: '.scfConfirmPasswordTextBox',
            error: '.scfValidator'
        },

        holders: {
            general: 'scfSingleLineGeneralPanel',
            email: 'scfEmailGeneralPanel',
            telephone: 'scfTelephoneGeneralPanel',
            multi: 'scfMultipleLineGeneralPanel',
            drop: 'scfDropListGeneralPanel',
            check: 'scfCheckBoxListGeneralPanel',
            radio: 'scfRadioButtonListGeneralPanel',
            mobile: 'scfSmsTelephoneGeneralPanel',
            password: 'scfPasswordGeneralPanel',
            confirm: '.scfConfirmPasswordGeneralPanel'
        },

        init: function (requiredText, messagesOverride) {
            self = this;

            dog = this.settings;
            msg = this.messages;
            cla = this.classes;
            hol = this.holders;

            //Override langauge variable
            if (typeof requiredText !== 'undefined') {
                msg.textbox = '<span><span class="vh"> is</span> (' + requiredText + ')</span>';
            }

            if (messagesOverride) {
                $.extend(msg, messagesOverride);
            }

            self.bindUIActions();
            self.focusIndex();
            self.focusError();

        },

        focusIndex: function() {
            $(dog.validator).attr('tabindex', 0);
        },

        focusError: function() {
            $(dog.valreq).eq(0).focus();
        },

        checkElements: function() {

            var validation = $(dog.validator);
            var required = $(dog.required);
            var parentEle = validation.parent();

            // function findElement(element){
            //     if (parentEle.find(cla.lists)) {
            //         parentEle.find(element).addClass(dog.border);
            //     } else if (parentEle.find(cla.radios)) {
            //         parentEle.find(element).addClass(dog.border);
            //     } else {
            //         parentEle.find(element).addClass(dog.border);
            //     }
            // }

            // findElement(cla.textfield);
            // findElement(cla.textarea);
            // findElement(cla.selectbox);
            // findElement(cla.lists);
            // findElement(cla.radios);
            // findElement(cla.telephone);


            required.each(function() {
                $(this).siblings(dog.label).append(msg.textbox);
                $(this).remove();
            });

            validation.each(function() {

                if ($(this).prev().hasClass(hol.general)) {
                    $(this).html($(this).prev().prev().text() + msg.require);
                    $(this).prev().prev().append(msg.textbox);
                } else if ($(this).prev().hasClass(hol.email)) {
                    $(this).html($(this).prev().prev().text() + msg.require);
                    $(this).prev().prev().append(msg.textbox);
                } else if ($(this).prev().hasClass(hol.telephone)) {
                    $(this).html($(this).prev().prev().text() + msg.require);
                    $(this).prev().prev().append(msg.textbox);
                } else if ($(this).prev().hasClass(hol.mobile)) {
                    $(this).html($(this).prev().prev().text() + msg.require);
                    $(this).prev().prev().append(msg.textbox);
                } else if ($(this).prev().hasClass(hol.multi)) {
                    $(this).html($(this).prev().prev().text() + msg.require);
                    $(this).prev().prev().append(msg.textbox);
                } else if ($(this).prev().hasClass(hol.drop)) {
                    $(this).html($(this).prev().prev().text() + msg.select);
                    $(this).prev().prev().append(msg.textbox);
                } else if ($(this).prev().hasClass(hol.check)) {
                    $(this).html($(this).prev().prev().text() + msg.multisel);
                    $(this).prev().prev().find(cla.lists).prepend(msg.checkbox);
                } else if ($(this).prev().hasClass(hol.radio)) {
                    $(this).html($(this).prev().prev().text() + msg.select);
                    $(this).prev().prev().find(cla.radios).prepend(msg.radiobox);
                } else if ($(this).prev().hasClass(hol.password)) {
                    $(this).html($(this).prev().prev().text() + msg.require);
                    $(this).prev().prev().append(msg.textbox);
                } else if ($(this).prev().hasClass(hol.confirm)) {
                    $(this).html($(this).prev().prev().text() + msg.require);
                    $(this).prev().prev().append(msg.textbox);
                }

            });

        },

        bindUIActions: function() {

            self.checkElements();

            $(dog.submit).click(function() {
                self.focusIndex();
                self.focusError();
            });


        }

    };
})();
