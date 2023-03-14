export const idgenerator = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random +  fecha
}
export const dateType = (fecha) => {
    const dateNew = new Date(fecha);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return dateNew.toLocaleDateString('es-ES' , options)
}