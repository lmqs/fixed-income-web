
import React, { useState } from 'react';
import styles from './styles.module.css'
import SearchIcon from './../../images/search-icon.svg'

interface SearchInputProps {
  onSearch: (term: string) => void;
}
export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm)
  };
  return (
    <div className={styles.inputContainer}>
      <span className={styles.searchIcon}>
        <img src={SearchIcon} alt="Search" className={styles.icon} />
      </span>
      <input type="text" className={styles.inputField}  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Digite o nome da instituição financeira"/>
      <button className={styles.buttonSearch} onClick={handleSearch}>Pesquisar</button>
    </div>
  );
}
