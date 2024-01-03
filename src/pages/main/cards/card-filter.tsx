import React from 'react';
import styles from './card-filter.module.css';

interface FilterProps {
  onFilterChange: (selectedValue: string) => void
  filterOptions?: string[]
}

export const Filter: React.FC<FilterProps> = ({ onFilterChange, filterOptions  }) => {
  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    onFilterChange(selectedValue)
  }

  return (
    <div className={styles.filterContainer}>
      <select className={styles.select} onChange={handleSelectionChange}>
        {filterOptions?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
