import '../styles/Menu.css'

function Menu() {
    const categories = ['categorie legumes', 'categorie feculent', 'categorie viande', 'categorie poisson', 'categorie laitage', 'categorie fruit']
    return (
        <div className = 'cym-menu'>
            {categories.map((element) => (
                <div className = 'cym-menu-item'>
                    <button className={element}></button>
                </div>
            ))}
        </div>
    )
}

export default Menu