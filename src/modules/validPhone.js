const validPhone = () => {
    const validPhone = document.querySelectorAll('.feedback__input-input');
    const feedbackBlockForm = document.querySelectorAll('.feedback-block__form-input_phone');

    const phoneValid = event => {
        const target = event.target;
        let targetValue = target.value;
        targetValue = targetValue.replace(/[^0-9]/gi, '');
        targetValue = targetValue.replace(/^[0-9]/gi, '+7(');
        targetValue = targetValue.replace(/^\+7\(\d{3}/gi, match => match + ')');
        targetValue = targetValue.replace(/^\+7\(\d{3}\)\d{3}/gi, match => match + '-');
        targetValue = targetValue.replace(/^\+7\(\d{3}\)\d{3}-\d{2}/gi, match => match + '-');
        targetValue = targetValue.replace(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{3,}/gi, match => match.slice(0, -1));

        target.value = targetValue;
    };

    validPhone.forEach(item => {
        item.addEventListener('input', phoneValid);
    });

    feedbackBlockForm.forEach(item => {
        item.addEventListener('input', phoneValid);
    });
};

export default validPhone;