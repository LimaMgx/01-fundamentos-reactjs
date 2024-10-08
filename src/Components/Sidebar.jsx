import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        
        
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=40&w=506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <div className={styles.profile}>
                <strong>
                    Miguel Lucena
                </strong>

                <span>
                    Web Developer
                </span>
                <footer>
                    <a href="#">Edite seu Perfil</a>
                </footer>
            </div>
            

        
        </aside>
        

       
    )
}