/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
const sendForm = () => {
    const sendForm = document.querySelectorAll('.send-form');
    const feedbackInputPhone = document.querySelectorAll('.feedback__input-input');
    const feedbackBlockForm = document.querySelectorAll('.feedback-block__form-input_phone');
    const inputName = document.querySelectorAll('.feedback-block__form-input_name');
    const checkbox = document.querySelectorAll('.checkbox__input');
    const loadedMessage = 'идёт отправка...';
    const messageChecked = 'поставте галочку на обработку данных';
    const errorMassage = 'упс, сервер устал и прилёг';

    let validName = false;
    let validPhone = false;
    let validCheckbox = false;

    const postData = formData => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const newMassage = document.createElement('div');
    newMassage.classList.add('status-massage');
    newMassage.style.cssText = `
    color: #ffd11a;
    display: contents;
    margin-top: 10px;
    font-size: 1rem;
    text-align: center;`;

    const getNewMessage = statusMassage => {
        newMassage.textContent = statusMassage;
    };


    const resetForm = () => {
        validName = false;
        validPhone = false;
        validCheckbox = false;

        const statusMassage = document.querySelector('.status-massage');
        statusMassage.remove();

        inputName.forEach(item => {
            item.value = '';
        });
        feedbackInputPhone.forEach(item => {
            item.value = '';
        });
        feedbackBlockForm.forEach(item => {
            item.value = '';
        });

        checkbox.forEach(elem => {
            elem.checked = false;
        });
    };
    const regValidPhone = event => {
        const target = event.target;
        const phoneReg = /^\++?7\(+?\d{3}\)+?\d{3}-+?\d{2}-+?\d{2}$/gi;
        if (phoneReg.test(target.value)) {
            validPhone = true;
        }
    };

    feedbackInputPhone.forEach(item => {
        item.addEventListener('blur', event => {
            regValidPhone(event);
        });
    });

    feedbackBlockForm.forEach(item => {
        item.addEventListener('blur', event => {
            regValidPhone(event);
        });
    });

    inputName.forEach(elem => {
        elem.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
        });
        elem.addEventListener('blur', event => {
            const target = event.target;
            target.value = target.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').trim();
            if (target.value.length <= 1) {
                target.value = '';
            } else {
                target.value = target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
                validName = true;
            }
        });
    });

    sendForm.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            const target = e.target;
            const formData = new FormData(target);

            if (target === item) {
                const checkbox = document.querySelectorAll('.checkbox__input');
                checkbox.forEach(elem => {
                    if (item.contains(elem)) {
                        if (elem.checked === true) {
                            validCheckbox = true;
                        } else if (elem.checked !== true) {
                            validCheckbox = false;
                            item.appendChild(newMassage);
                            getNewMessage(messageChecked);
                        }
                    }
                });
            }

            const formNotName = document.querySelectorAll('.feedback__form');
            formNotName.forEach(items => {
                if (target === items) {
                    validName = true;
                }
            });


            console.log(validPhone);
            console.log(validCheckbox);
            console.log(validName);

            if (validPhone === true && validName === true && validCheckbox === true) {
                target.appendChild(newMassage);
                getNewMessage(loadedMessage);
                postData(formData)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200.');
                        } else {
                            setTimeout(() => {
                                resetForm();
                            }, 2000);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        target.appendChild(newMassage);
                        getNewMessage(errorMassage);
                        setTimeout(() => {
                            resetForm();
                        }, 2000);
                    });
            }
        });
    });
};

export default sendForm;