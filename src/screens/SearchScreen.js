import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = (props) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price);
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        // onTermChange={(newTerm) => setTerm(newTerm)}
        // onTermSubmit={() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList
        results={filterResultsByPrice('$')}
        title="Cost Effective" />
      <ResultsList
        results={filterResultsByPrice('$$')}
        title="Bit Pricier" />
      <ResultsList
        results={filterResultsByPrice('$$$')}
        title="Big Spender" />
    </View>
  );
};

const styles =  StyleSheet.create({});

export default SearchScreen;
