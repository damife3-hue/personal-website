import React from 'react'
import { Doughnut } from 'react-chartjs-2' 
import styled from 'styled-components'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, DatasetController } from 'chart.js'
import NumberStat from './numberStat.tsx'
import { VerticalAlignContainer, VerticalAlignContent, ThemeGreen, ThemeYellow, ThemeRed } from './stockAnalysisDashboard.ts'

// Register the necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

// Flex container for the entire component (chart + text )
const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%; /*Full height*/
`

// Styled component for the chart container 
const ChartContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: left;
    align-items: left;
`

interface NewsSentimentAnalysisProp {
    newsTextAnalysis: any;
}

const NewsSentimentAnalysis: React.FC<NewsSentimentAnalysisProp> = ({newsTextAnalysis}) => {

    const sentiment = newsTextAnalysis.data.sentiment

    // Data for the Doughnut Chart 
    const data = {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [
            {
                label:'Sentiment',
                data: [sentiment.pos,sentiment.neg,sentiment.neu], // Example data points for positive, negative and neutral
                backgroundColor: [ThemeGreen,ThemeRed,ThemeYellow],
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                position: 'bottom' as const,
                labels: {
                    font: {
                        size: 10, 
                    },
                    boxWidth: 10, 
                    padding: 10,
                },
            }
        },
    }

    return (
        <FlexContainer>
            {/* Chart Section */}
            <ChartContainer>
                <Doughnut data = {data} options = {options}/>
            </ChartContainer>
            {/* Text Section */}
            <VerticalAlignContainer>
                <VerticalAlignContent>
                    <div>News Text analysis</div>
                    <div style= {{height: '40px'}}>
                        <NumberStat
                        value = {newsTextAnalysis.metadata.sentencesAnalyzed}
                        label = 'Sentences Analyzed'
                        center = {false}
                        ></NumberStat>
                    </div>
                    <div style= {{height: '40px'}}>
                        <NumberStat
                        value = {newsTextAnalysis.metadata.wordsAnalyzed}
                        label = 'Words Analyzed'
                        center = {false}
                        ></NumberStat>
                    </div>
                </VerticalAlignContent>
            </VerticalAlignContainer>
        </FlexContainer>
    )

}

export default NewsSentimentAnalysis