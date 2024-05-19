'use client'
import Header from "../../components/Header";
import { Container, ContentContainer, TextContainer, TituloContainer, TextoContent } from "./style";
import Card from "@/components/Card";

export default function Ajuda() {
    return (
        <Container className="corpoPadrao">
            <ContentContainer>
                <TextoContent>
                    <TituloContainer>
                        <h2>Estratégias para Evitar a Recaída no Uso de Drogas</h2>
                        <span>Para ajudar a parar de usar drogas, é crucial evitar ambientes, pessoas e situações que possam desencadear uma recaída. Isso inclui locais onde as drogas são usadas e amigos que as utilizam. Se for necessário estar em um ambiente de risco, leve alguém de confiança para ajudar a resistir à tentação.</span>
                    </TituloContainer>
                    <TextContainer>
                        <h3>1 - Se Expressar com Amigos e Família</h3>
                        <span>Compartilhar sentimentos com amigos, família e pessoas de confiança é essencial na recuperação. Abrir-se sobre o que está passando ajuda a reduzir o estresse e a ansiedade e constrói um sistema de suporte, mantendo-o no caminho certo.</span>
                    </TextContainer>
                    <TextContainer>
                        <h3>2 - Buscar Grupos de Apoio</h3>
                        <span>Grupos de apoio fornecem um ambiente seguro para compartilhar experiências e discutir desafios. Há vários tipos de grupos, como de autoajuda e de 12 passos. Encontrar um grupo adequado às suas necessidades é fundamental para o suporte necessário na recuperação.</span>
                    </TextContainer>
                    <TextContainer>
                        <h3>3 - Seguir Recomendações Médicas</h3>
                        <span>O tratamento da dependência química envolve medicamentos e terapia. Seguir o plano de tratamento prescrito pelos médicos é crucial para aliviar sintomas da abstinência, restaurar o equilíbrio químico no cérebro e evitar recaídas.</span>
                    </TextContainer>
                    <TextContainer>
                        <h3>4 - Buscar Ajuda Especializada</h3>
                        <span>Profissionais de saúde mental podem oferecer orientação e terapia especializada para lidar com as emoções que levam ao uso de drogas. Consultar um médico ou procurar uma clínica de recuperação pode acelerar o processo de desintoxicação e reabilitação.</span>
                        <span>Essas estratégias combinadas aumentam as chances de vencer o vício e manter uma vida saudável e livre de drogas.</span>
                    </TextContainer>
                </TextoContent>
            </ContentContainer>
        </Container>
    )
}