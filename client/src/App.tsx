import React, { useState, useEffect } from 'react'
import './App.css'
import { ChakraProvider, extendTheme, Container, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Box, Stack } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import LineChart from './components/LineChart'
import theme from './theme'

const defaultTheme = extendTheme(theme)

// Note: This is just for example purposes
// should be replaced with real data from the backend
/*const tempData = {
    xAxis: ['0', '1', '2', '3', '4', '5'],
    yAxis: ['100', '150', '180', '210', '240', '350'],
}*/

function App() {

    //state for inputs
    const [initial, setInitial] = useState(1000)
    const [monthly, setMonthly] = useState(100)
    const [interest, setInterest] = useState(5)

    //api result states
    const [results, setResults] = useState({ xAxis: [], yAxis: [] })

    //fetching data frorm backend when input changes
    useEffect(() => {
        const fetchData = async () => {
          const url = `http://localhost:3001/api/calculate?initial=${initial}&monthly=${monthly}&interest=${interest}`;
          
          try {
            const response = await fetch(url);
            const data = await response.json();
            
            setResults({
              xAxis: data.map((d: any) => d.year.toString()),
              yAxis: data.map((d: any) => d.amount)
            });
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
      
        fetchData();
      }, [initial, monthly, interest]); 

    console.log("Input values:", { initial, monthly, interest });

    return (
        <ChakraProvider theme={defaultTheme}>
            <DefaultLayout>
                <Container pt={6} maxW="container.md">
                    <Stack spacing={8}>
                        {/* Initial Savings Slider */}
                        <Box>
                            <Text fontWeight="bold">Initial Savings: £{initial}</Text>
                            <Slider value={initial} min={0} max={50000} step={100} onChange={(val) => setInitial(val)}>
                                <SliderTrack><SliderFilledTrack /></SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        {/* Monthly Deposit Slider */}
                        <Box>
                            <Text fontWeight="bold">Monthly Deposit: £{monthly}</Text>
                            <Slider value={monthly} min={0} max={5000} step={50} onChange={(val) => setMonthly(val)}>
                                <SliderTrack><SliderFilledTrack /></SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        {/* Interest Rate Slider */}
                        <Box>
                            <Text fontWeight="bold">Interest Rate: {interest}%</Text>
                            <Slider value={interest} min={0} max={15} step={0.1} onChange={(val) => setInterest(val)}>
                                <SliderTrack><SliderFilledTrack /></SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>

                        {/* The Chart - Ensure it uses 'results' state */}
                        <LineChart
                            title="Savings Over Time"
                            xAxisData={results.xAxis}
                            yAxisData={results.yAxis}
                            xLabel="Years"
                            yLabel="Amount (£)"
                        />
                    </Stack>
                </Container>
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
