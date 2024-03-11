import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilters = createSelector([selectContacts, selectFilter], (contacts, filtered) => {
    return (contacts || []).filter(contact => {
      return contact && contact.name && contact.name.toLowerCase().includes(filtered.toLowerCase());
    });
  });