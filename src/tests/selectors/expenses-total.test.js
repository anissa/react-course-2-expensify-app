
import React from 'react';
import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const empty = [];
    const result = selectExpensesTotal(empty);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const expense =[expenses[1]];
    const result = selectExpensesTotal(expense);
    expect(result).toBe(109500);
});

test('should correctly add up a multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});
