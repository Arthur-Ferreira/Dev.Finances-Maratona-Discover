const Modal = {
    open() {
        // Abrir o Modal
        // Adicionar o class active ao MODAL
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        // Fechar o Modal
        // Remover a Class active do Modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}