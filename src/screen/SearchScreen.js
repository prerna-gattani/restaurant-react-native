import React, { useState} from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";


const SearchScreen = () => {
    const [term, setTerm] = useState(""); // ✅ Make sure it's `term`
    const [searchAPI,results,errorMessage]=useResults();

    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
            return result.price===price;
        });
    };

    return (
        <View style={{flex:1}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} // ✅ Directly passing setTerm
                onTermSubmit={()=>{searchAPI(term)}} 
            />
            {errorMessage? <Text>{errorMessage}</Text>:null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
                <ResultsList results={filterResultsByPrice('$$')} title='Big Spender' />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
