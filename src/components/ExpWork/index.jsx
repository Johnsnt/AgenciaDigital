import Card from "../Card";
import style from "./Expwork.module.css";


export default function ({ theme }) {




    return (
        <section id={theme ? style.sectiondark : style.section}>
            <div className={`${style.box_title} section-limit`}>
                <h3>Experiências de Trabalho</h3>
                <p>
                    Com uma vasta experiência no mercado de Branding, Design Gráfico,
                    Criação de Sites e Marketing Digital, nos empenhamos diariamente para
                    entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className={`${style.box_card} section-limit`}>
                <Card data="MARÇO 2005 - 2007"
                    titulo="Web Developer"
                    empresa="TechGenius Solutions"
                    info="Desenvolvimento de websites responsivos, aplicações web e sistemas sob medida, utilizando as mais modernas tecnologias e boas práticas de desenvolvimento."
                    theme={ theme }
                />
                <Card data="AGOSTO 2008 - 2009"
                    titulo="Graphic Designer"
                    empresa="CreativePixel Studios"
                    info="Criação de identidade visual, design de interfaces e materiais gráficos, garantindo uma experiência visual atraente e impactante para os usuários."
                    theme={ theme }
                />
                <Card data="SETEMBRO 2009 - 2011"
                    titulo="Lead UX/UI Designer"
                    empresa="Zenith Tech Solutions"
                    info="Liderança na criação de interfaces de usuário de alto desempenho para aplicativos móveis e plataformas web, focando na maximização da experiência do usuário e na conversão eficaz."
                    theme={ theme }
                />
                <Card data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    info="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores."
                    theme={ theme }
                />
                <Card data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    info="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra."
                    theme={ theme }
                />
                <Card data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    info="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução."
                    theme={ theme }
                />
            </div>
        </section>
    );
}