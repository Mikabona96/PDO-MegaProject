import '../../assets/img/4th-section-bg.png';

export const fourthSectionFunction = () => {
    const data = {
        name:    '',
        phone:   '',
        email:   '',
        comment: '',
    };

    const name = document.querySelector('.fourthsection .form-wrapper .form .name');
    const tel = document.querySelector('.fourthsection .form-wrapper .form .tel');
    const email = document.querySelector('.fourthsection .form-wrapper .form .email');
    const comment = document.querySelector('.fourthsection .form-wrapper .form .comment');
    const btn = document.querySelector('.fourthsection .form-wrapper .form .btn');
    const form = (document.querySelector('.fourthsection .form-wrapper .form')) as HTMLFormElement;
    name?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.name = target.value;
        target.value = data.name;
    });
    tel?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.phone = target.value;
        target.value = data.phone;
    });
    email?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.email = target.value;
        target.value = data.email;
    });
    comment?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.comment = target.value;
        target.value = data.comment;
    });

    form?.addEventListener('submit', (event) => {
        event.preventDefault();
        // fetch('https://fake.api.com', {
        //     method:  'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(() => console.log())
        //     .finally(() => form.reset());

        setTimeout(() => {
            form.reset();
        }, 1000);
    });
};

fourthSectionFunction();
