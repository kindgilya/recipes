import { useState } from 'react';
import styles from './Filter.module.scss';
import cn from 'classnames';
import Button from '../Button/Button';

const Filter = ({ handler, filters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (type, value) => {
    handler({ ...filters, [type]: value });
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(styles.filter)}>
      <Button 
        use="primary" 
        onClick={toggleFilters}
        className={cn(styles['filter__toggle'])}
      >
        {isOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
        <span className={cn(
          styles['filter__arrow'],
          { [styles['filter__arrow--up']]: isOpen }
        )} />
      </Button>

      {isOpen && (
        <div className={cn(styles['filter__content'])}>
          <div className={cn(styles['filter__group'])}>
            <label 
              htmlFor="difficulty" 
              className={cn(styles['filter__label'])}
            >
              Сложность:
            </label>
            <select
              id="difficulty"
              className={cn(styles['filter__select'])}
              value={filters.difficulty}
              onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            >
              <option value="">Любая</option>
              <option value="Easy">Легкая</option>
              <option value="Medium">Средняя</option>
              <option value="Hard">Сложная</option>
            </select>
          </div>

          <div className={cn(styles['filter__group'])}>
            <label 
              htmlFor="cookingTime" 
              className={cn(styles['filter__label'])}
            >
              Время приготовления:
            </label>
            <select
              id="cookingTime"
              className={cn(styles['filter__select'])}
              value={filters.cookingTime}
              onChange={(e) => handleFilterChange('cookingTime', e.target.value)}
            >
              <option value="">Любое</option>
              <option value="0-30">До 30 минут</option>
              <option value="30-60">30-60 минут</option>
              <option value="60+">Более 60 минут</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;