'use client'
import React from "react";
import Header from "../../components/Header";
import { Container, ContentContainer, Text, CardContainer, ImageContainer } from "./style";
import Card from "@/components/Card";

export default function Curiosidades() {
    return (
        <Container className="corpoPadrao">
            <ContentContainer>
            <Text>
                <span> O efeito das drogas e do álcool no corpo humano a longo prazo é profundamente prejudicial e pode causar danos irreversíveis em diversos sistemas do organismo. Tanto as drogas ilícitas quanto o álcool têm impactos negativos que se acumulam ao longo do tempo, afetando a saúde física, mental e emocional dos usuários.
                    Além dos efeitos diretos sobre a saúde física, tanto as drogas quanto o álcool podem ter consequências devastadoras na vida social, familiar e profissional dos usuários. O vício pode levar a problemas financeiros, perda de emprego, isolamento social e conflitos interpessoais. </span>
            </Text>
            <Text>
                <span>É importante destacar que os efeitos das drogas e do álcool no corpo humano são cumulativos e podem se manifestar ao longo de anos ou décadas de uso. Por isso, a prevenção, o tratamento e o apoio são fundamentais para ajudar os indivíduos a superarem o vício e minimizarem os danos à sua saúde e qualidade de vida. Além disso, com o consumo abusivo de drogas o indivíduo pode acabar desenvolvendo a tolerância, que é quando a pessoa precisa consumir doses cada vez maiores da substância para se ter os mesmos efeitos que tinha antes, o que muitas vezes pode acabar sendo fatal. Desse modo, existem diversos tipos de drogas que geram diferentes efeitos e consequências no organismo do indivíduo.
                </span>
            </Text>
            <Text>
                <span>Veja abaixo os efeitos de algumas drogas lícitas e ilícitas:</span>
            </Text>
            <Text>
                <span><span className="textoNegrito">Álcool</span> – pode agir como estimulante, deixando a pessoa desinibida e eufórica, mas, conforme a quantidade ingerida aumenta, a depressão, a diminuição da coordenação motora, dos reflexos e o sono podem aparecer. As consequências do uso prolongado da droga é o alcoolismo, a cirrose, o câncer no fígado e danos ao cérebro.
                    Tabaco – no caso do cigarro, quando usado por muito tempo, pode causar câncer de pulmão, de faringe, de boca, além de problemas cardíacos, circulatórios e pulmonares.</span>
            </Text>
            <Text>
                <span><span className="textoNegrito">Maconha</span> – distorce os sentidos e a percepção do tempo e pode causar confusão mental, paranoia, pânico, agitação e alucinações. As possíveis consequências do uso de drogas, nesse caso, são a perda de memória e da habilidade de processar informações complexas, irritação no sistema respiratório e desenvolvimento do câncer de pulmão.</span>
            </Text>
            <Text>
                <span><span className="textoNegrito">Cocaína</span> – pode causar a sensação de alerta e euforia ou de isolamento, ansiedade e pânico. As consequências do uso prolongado da droga são diminuição do sono, do cansaço e do apetite, alteração nos batimentos cardíacos, da pressão arterial e da temperatura. Quando usada em excesso, geralmente de forma injetável, pode causar overdose e morte.</span>
            </Text>
            <Text>
                <span><span className="textoNegrito">Crack </span> – é uma droga proveniente da cocaína que causa agitação e euforia e, logo em seguida, depressão. As principais consequências do uso de drogas, nesse caso, são perda de apetite, desnutrição, insônia, rachaduras nos lábios e gengivas, tosse, problemas respiratórios e cardíacos e sensação de perseguição.
                    Ecstasy – o efeito da droga é mudança na percepção de sons e imagens. Também causa aumento da temperatura corporal, desidratação, esgotamento físico e, em alguns casos, morte súbita. O uso contínuo pode causar ansiedade, medo, pânico e delírios.</span>
            </Text>
            <Text>
                <span><span className="textoNegrito">Solventes ou inalantes </span> – o efeito inicial da droga é euforia, mas, por poucos minutos. Entre as consequências do uso prolongado da droga estão: danos aos fígados e rins, perda de peso, ferimentos no nariz e na boca ou, ainda, a morte súbita por inalação de solvente, morte por falência cardíaca, ou morte por sufocamento.</span>
            </Text>
            </ContentContainer>
        </Container>
    )
}