function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        // Remove toast click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
        const icons = {
            success: 'bx bx-check-circle',
            error: 'bx bx-error-circle'
        };
        const icon = icons[type];
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class='${icon}'></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class='bx bx-x'></i>
            </div>
        `;
        main.appendChild(toast);
    }
}


function showSuccessToast() {
    toast({
        title: 'Thành công !',
        message: 'Tin nhắn của bạn đã gửi đi thành công !',
        type: 'success',
        duration: 3000
    })
}

function showErrorToast() {
    toast({
        title: 'Thất bại !',
        message: 'Vui lòng điền đầy đủ thông tin !',
        type: 'error',
        duration: 3000
    })
}