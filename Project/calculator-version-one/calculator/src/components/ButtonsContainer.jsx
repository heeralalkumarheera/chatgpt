import styles from './ButtonsContainer.module.css';

const ButtonsContainer = ({ onButtonClick }) => {
    const ButtonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0','.'];
    return (
        <div className={styles.buttonsContainer}>
            {ButtonNames.map((ButtonNames, index) =>
            (<button key={index} className={styles.button} onClick={() => onButtonClick(ButtonNames)}>
                {ButtonNames}
            </button>))}

        </div>
    );
}
export default ButtonsContainer;