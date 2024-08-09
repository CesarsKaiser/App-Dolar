import React from 'react'; 
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper';

const TableContainer = () => { 
    return ( 
    <DataTable style={styles.container}> 
        <DataTable.Header style={styles.tableHeader}> 
            <DataTable.Title>Día</DataTable.Title> 
            <DataTable.Title>Precio</DataTable.Title> 
            <DataTable.Title>Tasa</DataTable.Title> 
        </DataTable.Header> 
        <DataTable.Row> 
            <DataTable.Cell>1</DataTable.Cell> 
            <DataTable.Cell>36.5</DataTable.Cell> 
            <DataTable.Cell>BCV</DataTable.Cell> 
        </DataTable.Row> 
    
        <DataTable.Row> 
            <DataTable.Cell>1</DataTable.Cell> 
            <DataTable.Cell>40</DataTable.Cell> 
            <DataTable.Cell style={{textAlign:'center'}}>Paralelo</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell>2</DataTable.Cell> 
            <DataTable.Cell>37</DataTable.Cell> 
            <DataTable.Cell>BCV</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell>2</DataTable.Cell> 
            <DataTable.Cell>41</DataTable.Cell> 
            <DataTable.Cell>Paralelo</DataTable.Cell> 
        </DataTable.Row>
        <DataTable.Row> 
            <DataTable.Cell>3</DataTable.Cell> 
            <DataTable.Cell>41</DataTable.Cell> 
            <DataTable.Cell>BCV</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell>3</DataTable.Cell> 
            <DataTable.Cell>41</DataTable.Cell> 
            <DataTable.Cell>Paralelo</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell>4</DataTable.Cell> 
            <DataTable.Cell>41</DataTable.Cell> 
            <DataTable.Cell>BCV</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell>4</DataTable.Cell> 
            <DataTable.Cell>41</DataTable.Cell> 
            <DataTable.Cell>Paralelo</DataTable.Cell> 
        </DataTable.Row> 
    </DataTable> 
    ); 
}; 

export default TableContainer; 
const styles = StyleSheet.create({ 
    container: { 
        width: 400,
        height: 200,
    }, 
    
    tableHeader: { 
        backgroundColor: '#DCDCDC',
        textAlign: 'center',
    }, 
});