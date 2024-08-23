const avnaca = document.querySelectorAll('.btn-proximo');

avnaca.forEach(button => {
        button.addEventListener('click', function(){
            const atual = document.querySelector('.ativo');
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

            atual,classList.remove('ativo');
            document,getElementById(proximoPasso).classList.add('ativo')
        })

})