import './Snackbar.scss'

const snackLogos = {
    success: `<svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></svg>`,
    error: `<svg stroke="currentColor" fill="red" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg>`
}

export const showSnackbar = (type, desc) => {
    const svgLogo = snackLogos[type] ?? 'eror'
    const mainPageComp = document.getElementById('main-page-component')
    const snackContaner = document.createElement('div')
    snackContaner.id = 'snackbarContainer'

    const snackLogoContainer = document.createElement('div')
    snackLogoContainer.className = 'snackLogoContainer'

    const snackDescContainer = document.createElement('div')
    snackDescContainer.className = 'snackDes'
    snackDescContainer.textContent = desc;

    snackLogoContainer.innerHTML = svgLogo
    snackContaner.appendChild(snackLogoContainer)
    snackContaner.appendChild(snackDescContainer)
    mainPageComp.appendChild(snackContaner)

    setTimeout(() => {
        removeSnackbar()
    }, 1500)
}

function removeSnackbar() {
    const snackbar = document.getElementById('snackbarContainer')
    snackbar.remove()
}