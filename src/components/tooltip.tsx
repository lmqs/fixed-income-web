import styles from './tooltip.module.css';

export function Tooltip(props: { text: any; children: any; }) {
  const { text, children } = props;
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext}>{text}</span>
    </div>
  );
}
