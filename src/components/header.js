function Header(props) {
    const {planet} = props
    return(
        <h1 data-testid={'top-header'}>Hello {planet}</h1>
    )
}

export default Header