const FunctionalComponent = ({nama}) => {
    return (
        <div>
            <h1> Membuat Text denga functional component</h1>
            <h2>Hallo {nama}, Selamat Belajar</h2>
        </div>
    )
}
FunctionalComponent.defaultProps = {
    nama : 'Azmi'
}
export default FunctionalComponent;