import { getYear } from "../../Utils/DateUtils";

// Define a mapping of tags to categories
export const tagToCategoryMap = {
  Segurança: "Secretaria Municipal de Segurança (Porto Alegre)",
  Smseg: "Secretaria Municipal de Segurança (Porto Alegre)",
  "Secretaria Municipal de Segurança (SMSEG)":
    "Secretaria Municipal de Segurança (Porto Alegre)",
  "Desenvolvimento Social":
    "Secretaria Municipal de Desenvolvimento Social (Porto Alegre)",
  Smdse: "Secretaria Municipal de Desenvolvimento Social (Porto Alegre)",
  "Secretaria Municipal de Desenvolvimento Social (SMDS)":
    "Secretaria Municipal de Desenvolvimento Social (Porto Alegre)",
  "Desenvolvimento Econômico":
    "Secretaria Municipal de Desenvolvimento Econômico (Porto Alegre)",
  "Meio Ambiente":
    "Secretaria Municipal do Meio Ambiente e Sustentabilidade (Porto Alegre)",
  "Meio Ambiente e Sustentabilidade":
    "Secretaria Municipal do Meio Ambiente e Sustentabilidade (Porto Alegre)",
  Smams:
    "Secretaria Municipal do Meio Ambiente e Sustentabilidade (Porto Alegre)",
  "Secretaria Municipal de Meio Ambiente, Urbanismo e Sustentabilidade (SMAMUS)":
    "Secretaria Municipal de Meio Ambiente, Urbanismo e Sustentabilidade (Porto Alegre)",
  "Meio Ambiente, Urbanismo e Sustentabilidade":
    "Secretaria Municipal de Meio Ambiente, Urbanismo e Sustentabilidade (Porto Alegre)",
  "Planejamento e Gestão":
    "Secretaria Municipal de Planejamento e Gestão (Porto Alegre)",
  "Infraestrutura e Mobilidade":
    "Secretaria Municipal de Infraestrutura e Mobilidade (Porto Alegre)",
  "Infraestrutura e Mobilidade Urbana":
    "Secretaria Municipal de Infraestrutura e Mobilidade (Porto Alegre)",
  "Secretaria Municipal de Obras e Infraestrutura (SMOI)":
    "Secretaria Municipal de Obras e Infraestrutura (Porto Alegre)",
  "Obras e Infraestrutura":
    "Secretaria Municipal de Obras e Infraestrutura (Porto Alegre)",
  "Relações Institucionais":
    "Secretaria Municipal de Relações Institucionais (Porto Alegre)",
  "Esportes, Recreação e Lazer":
    "Secretaria Municipal de Esportes, Recreação e Lazer",
  Seda: "Secretaria Municipal dos Direitos Animais (Porto Alegre)",
  "Secretaria Municipal de Cultura e Economia Criativa (SMCEC)":
    "Secretaria Municipal de Cultura e Economia Criativa (Porto Alegre)",
  "Cultura e Economia Criativa":
    "Secretaria Municipal de Cultura e Economia Criativa (Porto Alegre)",
  "Direitos dos Animais":
    "Secretaria Municipal dos Direitos Animais (Porto Alegre)",
  "Direitos Animais":
    "Secretaria Municipal dos Direitos Animais (Porto Alegre)",
  "Secretaria Municipal de Esporte, Lazer e Juventude (SMELJ)":
    "Secretaria Municipal de Esporte, Lazer e Juventude (Porto Alegre)",
  "Esporte, Lazer e Juventude":
    "Secretaria Municipal de Esporte, Lazer e Juventude (Porto Alegre)",
  "Secretaria Municipal de Transparência e Controladoria (SMTC)":
    "Secretaria Municipal de Transparência e Controladoria (Porto Alegre)",
  "Secretaria Municipal de Governança Local e Coordenação Política (SMGOV)":
    "Secretaria Municipal de Governança Local e Coordenação Política (Porto Alegre)",
  "Governança Local e Coordenação Política":
    "Secretaria Municipal de Governança Local e Coordenação Política (Porto Alegre)",
  Parcerias: "Secretaria Municipal de Parcerias Estratégicas (Porto Alegre)",
  "Secretaria Municipal de Administração e Patrimônio (SMAP)":
    "Secretaria Municipal de Administração e Patrimônio (Porto Alegre)",
  "Administração e Patrimônio":
    "Secretaria Municipal de Administração e Patrimônio (Porto Alegre)",
  "Gabinete de Inovação (GI)": "Gabinete da Inovação (Porto Alegre)",
  "Comunicação Social": "Gabinete de Comunicação Social (Porto Alegre)",
  "Gabinete da Causa Animal (GCA)": "Gabinete da Causa Animal (Porto Alegre)",

  Procempa: "Companhia de Processamento de Dados do Município de Porto Alegre",
  "Companhia de Processamento de Dados do Município (Procempa)":
    "Companhia de Processamento de Dados do Município de Porto Alegre",
  DMLU: "Departamento Municipal de Limpeza Urbana (Porto Alegre)",
  Dmlu: "Departamento Municipal de Limpeza Urbana (Porto Alegre)",
  "Limpeza Urbana": "Departamento Municipal de Limpeza Urbana (Porto Alegre)",
  "Departamento Municipal de Habitação (Demhab)":
    "Departamento Municipal de Habitação (Porto Alegre)",
  "Departamento Municipal de Limpeza Urbana (DMLU)":
    "Departamento Municipal de Limpeza Urbana (Porto Alegre)",
  "Centro Integrado de Comando":
    "Centro Integrado de Comando da Cidade de Porto Alegre",
  "Centro Integrado de Comando da Cidade de Porto Alegre (CEIC)":
    "Centro Integrado de Comando da Cidade de Porto Alegre",
  "Comissão Permanente de Atuação em Emergências (Copae)":
    "Comissão Permanente de Atuação em Emergências",
  "Defesa Civil": "Diretoria-Geral de Defesa Civil de Porto Alegre",
  "Defesa Cívil": "Diretoria-Geral de Defesa Civil de Porto Alegre",
  "Equipe de Manejo Arbóreo (EMA)": "Equipe de Manejo Arbóreo (Porto Alegre)",
  Legislativo: "Câmara Municipal de Porto Alegre",
  "Câmara Municipal de Porto Alegre (CMPA)": "Câmara Municipal de Porto Alegre",
  DMAP: "DMAP (Porto Alegre)",
  CGVS: "CGVS (Porto Alegre)",
  DMAE: "Departamento Municipal de Água e Esgotos (Porto Alegre)",
  Dmae: "Departamento Municipal de Água e Esgotos (Porto Alegre)",
  Água: "Departamento Municipal de Água e Esgotos (Porto Alegre)",
  "Água e Esgotos": "Departamento Municipal de Água e Esgotos (Porto Alegre)",
  "Departamento Municipal de Água e Esgotos (DMAE)":
    "Departamento Municipal de Água e Esgotos (Porto Alegre)",
  "Sine Municipal": "Sine Municipal (Porto Alegre)",
  Abastecimento: "DMAE (Porto Alegre)",
  EPTC: "Empresa Pública de Transporte e Circulação de Porto Alegre",
  "Empresa Pública de Transporte e Circulação (EPTC)":
    "Empresa Pública de Transporte e Circulação de Porto Alegre",
  Fasc: "Fundação de Assistência Social e Cidadania",
  "Fundação de Assistência Social e Cidadania – Fasc":
    "Fundação de Assistência Social e Cidadania",
  Pisa: "Programa Integrado Socioambiental",
  Procuradoria: "Procuradoria-Geral do Município de Porto Alegre",
  Secretariado: "Municipal secretariats of Porto Alegre",
  "Unidade de Saúde Orfanotrófrio": "Unidade de Saúde Orfanotrófio",
  "Primeira Infância Melhor (PIM)": "Primeira Infância Melhor",
  "Salão Nobre": "Salão Nobre (Paço Municipal de Porto Alegre)",
  "Restaurante Popular": "Restaurantes Populares",
  Capacitação: "Trainings by the Municipality of Porto Alegre",
  Curso: "Courses (education) by the Municipality of Porto Alegre",
  Visita: "Official visits involving the Municipality of Porto Alegre",
  "Viagem à Brasília":
    "Official visits involving the Municipality of Porto Alegre",
  Convênio: "Partnerships involving the Municipality of Porto Alegre",
  "Coletiva de Imprensa":
    "Press conferences by the Municipality of Porto Alegre",
  "Entrevista Coletiva":
    "Press conferences by the Municipality of Porto Alegre",
  "Guarda Municipal": "Guarda Municipal (Porto Alegre)",
  "Rede Municipal de Ensino": "Rede Municipal de Ensino (Porto Alegre)",
  "Núcleo de Imunizações DVS (NI)": "Núcleo de Imunizações DVS (Porto Alegre)",
  "Diretoria de Vigilância em Saúde (DVS)":
    "Diretoria de Vigilância em Saúde de Porto Alegre",
  "Vigilância em Saúde": "Diretoria de Vigilância em Saúde de Porto Alegre",
  "Vigilância Sanitária": "Diretoria de Vigilância em Saúde de Porto Alegre",
  "Sistema Único de Saúde (SUS)": "Sistema Único de Saúde",
  "Serviço de Atendimento Móvel de Urgência (SAMU)":
    "Serviço de Atendimento Móvel de Urgência",
  "Estação de Bombeamento de Águas Pluviais (Ebap)":
    "Estações de Bombeamento de Águas Pluviais",
  "Casa de Bombas": "Estações de Bombeamento de Águas Pluviais",
  "Aplicativo (app)": "Mobile apps of the Municipality of Porto Alegre",
  Carris: "Companhia Carris Porto-Alegrense",
  "Assistência Farmacêutica": "Assistência Farmacêutica (Porto Alegre)",
  "Centro Humanístico Vida": "Vida Centro Humanístico",

  Senac: "Serviço Nacional de Aprendizagem Comercial",
  Famurs: "Federação das Associações de Municípios do Rio Grande do Sul",
  Granpal: "Associação dos Municípios da Região Metropolitana de Porto Alegre",
  "Associação dos Auditores Fiscais da Receita Municipal de Porto Alegre (Aiamu)":
    "Associação dos Auditores Fiscais da Receita Municipal de Porto Alegre",
  "Parque Farroupilha (Redenção)": "Parque da Redenção",
  "Praça da Alfândega": "Praça da Alfândega (Porto Alegre)",
  "Praça Marechal Deodoro (Matriz)": "Praça da Matriz (Porto Alegre)",
  "Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)":
    "Universidade Federal de Ciências da Saúde de Porto Alegre",
  "Moab Caldas": "Avenida Moab Caldas",
  "Sindicato dos Municipários de Porto Alegre (Simpa)":
    "Sindicato dos Municipários de Porto Alegre",
  "Igreja Nossa Senhora das Dores":
    "Igreja Nossa Senhora das Dores (Porto Alegre)",
  "Assembléia Legislativa": "Legislative Assembly of Rio Grande do Sul",
  "Fonte Talavera": "Fonte Talavera de La Reina",
  "Mercado Público Central": "Mercado Público de Porto Alegre",
  HMIPV: "Hospital Materno-Infantil Presidente Vargas",
  "Hospital de Pronto Socorro (HPS)":
    "Hospital de Pronto Socorro (Porto Alegre)",
  "Hospital Materno-Infantil Presidente Vargas (HMIPV)":
    "Hospital Materno-Infantil Presidente Vargas",
  "Unidade de Saúde Modelo": "Centro de Saúde Modelo",
  "Tribunal de Contas do Estado do Rio Grande do Sul (TCE-RS)":
    "Tribunal de Contas do Estado do Rio Grande do Sul",
  "Teatro da Santa Casa": "Teatro da Santa Casa (Porto Alegre)",
  "Catedral Metropolitana de Porto Alegre (Matriz)":
    "Catedral Metropolitana de Porto Alegre",
  "Teatro do Sesc": "Teatro do Sesc (Porto Alegre)",
  "Palácio do Comércio": "Palácio do Comércio (Porto Alegre)",
  "Estação Rodoviária de Porto Alegre": "Rodoviária (Trensurb)",
  "Grêmio Sargento Expedicionário Geraldo Santana": "Grêmio Geraldo Santana",

  "Região Metropolitana": "Região Metropolitana de Porto Alegre",
  "Bairro Azenha": "Azenha",
  "Bairro Belém Novo": "Belém Novo",
  "Bairro Bom Fim": "Bom Fim",
  "Bairro Centro Histórico": "Centro (Porto Alegre)",
  "Bairro Cidade Baixa": "Cidade Baixa (Porto Alegre)",
  "Bairro Cristal": "Cristal (Porto Alegre)",
  "Bairro Cruzeiro": "Cruzeiro (Porto Alegre)",
  "Bairro Hípica": "Hípica",
  "Bairro Ipanema": "Ipanema (Porto Alegre)",
  "Bairro Lami": "Lami (Porto Alegre)",
  "Bairro Partenon": "Partenon (Porto Alegre)",
  "Bairro Ponta Grossa": "Ponta Grossa (Porto Alegre)",
  "bairro Restinga": "Restinga (Porto Alegre)",
  "Bairro Restinga": "Restinga (Porto Alegre)",
  "Bairro Santa Tereza": "Santa Tereza (Porto Alegre)",
  "Bairro Santo Antônio": "Santo Antônio (Porto Alegre)",
  "Bairro Sarandi": "Sarandi (Porto Alegre)",
  "Bairro Bela Vista": "Bela Vista (Porto Alegre)",
  "Bairro Jardim Itu-Sabará": "Jardim Itu-Sabará",
  "Bairro Teresópolis": "Teresópolis (Porto Alegre)",
  "Bairro Bom Jesus": "Bom Jesus (Porto Alegre)",
  "Bairro Chapéu do Sol": "Chapéu do Sol",
  "Bairro Camaquã": "Camaquã (Porto Alegre)",
  "Bairro Cavalhada": "Cavalhada (Porto Alegre)",
  "Bairro Tristeza": "Tristeza (Porto Alegre)",
  "Bairro Vila Conceição": "Vila Conceição",
  "Bairro Auxiliadora": "Auxiliadora",
  "Bairro Higienópolis": "Higienópolis (Porto Alegre)",
  "Bairro São João": "São João (Porto Alegre)",
  "Bairro Moinhos de Vento": "Moinhos de Vento",
  "Bairro Petrópolis": "Petrópolis (Porto Alegre)",
  "Bairro Humaitá": "Humaitá (Porto Alegre)",
  "Bairro Navegantes": "Navegantes (Porto Alegre)",
  Petrópolis: "Petrópolis (Porto Alegre)",
  Partenon: "Partenon (Porto Alegre)",
  Navegantes: "Navegantes (Porto Alegre)",
  Nonoai: "Nonoai (Porto Alegre)",
  "4º Distrito": "4º Distrito (Porto Alegre)",
  "Quarto Distrito": "4º Distrito (Porto Alegre)",
  "Zona Norte": "Zona Norte (Porto Alegre)",
  "Zona Sul": "Zona Sul (Porto Alegre)",
  "Zona Leste": "Zona Leste (Porto Alegre)",
  "Arquipélago (Ilhas)": "Islands of Porto Alegre",
  "Vila Nova": "Vila Nova (Porto Alegre)",
  "Capital Gaúcha": "Porto Alegre",
  "Estádio Beira-rio": "Estádio Beira-Rio",
  "Orla Moacyr Scliar": "Parque Moacyr Scliar",
  Guaíba: "Rio Guaíba in Porto Alegre",
  "Lago Guaíba": "Rio Guaíba in Porto Alegre",
  "Avenida Castello Branco": "Avenida Presidente Castello Branco",
  "Praça Revolução Farroupilha (Trensurb)": "Praça Revolução Farroupilha",
  "Praça Montevideo": "Praça Montevidéu",

  "Exército Brasileiro": "Army of Brazil",
  "Festival de Inverno": "Festival de Inverno (Porto Alegre)",
  "#eufaçopoa": "EuFaçoPOA",
  "Universidade Federal do Rio Grande do Sul (UFRGS)":
    "Universidade Federal do Rio Grande do Sul",
  PUCRS: "Pontifícia Universidade Católica do Rio Grande do Sul",
  "Brigada Militar": "Brigada Militar do Rio Grande do Sul",
  Trabalho: "Festa de Nossa Senhora do Trabalho",
  Metas: "Prometas",
  Fecomércio: "Fecomércio-RS",
  "Comissão de Combate à Informalidade": "Fecomércio-RS",
  "Biblioteca Pública Josué Guimarães":
    "Biblioteca Pública Municipal Josué Guimarães",
  Unisinos: "Universidade do Vale do Rio dos Sinos (Porto Alegre campus)",
  "Caminhos Rurais": "Caminhos Rurais de Porto Alegre",
  "Unidade de Pronto Atendimento (UPA)": "Unidade de Pronto Atendimento",
  "Parque Moinhos de Vento (Parcão)": "Parque Moinhos de Vento",
  "Cais do Porto": "Cais Mauá",
  Unesco: "UNESCO",
  "Fórum da Liberdade": "30º Fórum da Liberdade (2017)",
  Fiergs: "Federação das Indústrias do Estado do Rio Grande do Sul",
  "Jogos Abertos": "Jogos Abertos de Porto Alegre",
  "Jockey Club": "Jockey Club do Rio Grande do Sul",
  "Nivel do Guaíba": "Water level recorders",
  "Paróquia de São Jorge": "Procissão de São Jorge (Porto Alegre)",
  "Programa Nacional de Apoio à Gestão Administrativa e Fiscal dos Municípios Brasileiros (PNAFM).":
    "Programa Nacional de Apoio à Gestão Administrativa e Fiscal dos Municípios Brasileiros",
  "CETE - Centro Estadual de Treinamento Esportivo":
    "Centro Estadual de Treinamento Esportivo",
  "Cidades Educadoras": "Educating Cities",
  "Junta de Serviço Militar": "Juntas de Serviço Militar",
  "Polícia Rodoviária Federal (PRF)": "Polícia Rodoviária Federal",
  "Enchente Porto Alegre Maio de 2024": "2024 Porto Alegre floods",
  "Enchente Porto Alegre": "2024 Porto Alegre floods",

  Lazer: "Recreation in Porto Alegre",
  Teatro: "Theatre of Porto Alegre",
  Farmácia: "Farmácias Distritais (Porto Alegre)",
  Árvore: "Trees in Porto Alegre",
  Música: "Music of Porto Alegre",
  Futebol: "Association football in Porto Alegre",
  roubo: "Crime in Porto Alegre",
  veículo: "Automobiles in Porto Alegre",
  Viaturas: "Automobiles in Porto Alegre",
  Habitação: "Housing in Porto Alegre",
  Ambulância: "Ambulances in Porto Alegre",
  Procissão: "Processions in Porto Alegre",
  Aéreas: "Aerial photographs of Porto Alegre",
  "Imagem Aérea": "Aerial photographs of Porto Alegre",
  Reciclagem: "Recycling in Porto Alegre",
  Táxi: "Taxis in Porto Alegre",
  Comércio: "Commerce in Porto Alegre",
  Infraestrutura: "Infrastructure in Porto Alegre",
  Dança: "Dance in Porto Alegre",
  Artesanato: "Handicrafts of Porto Alegre",
  exposição: "Exhibitions in Porto Alegre",
  Lixo: "Waste management in Porto Alegre",
  Escultura: "Sculptures in Porto Alegre",
  Alimentação: "Food of Porto Alegre",
  Motocicleta: "Motorcycles in Porto Alegre",
  Bombeiros: "Firefighters of Porto Alegre",
  Cinema: "Cinema of Porto Alegre",
  Vandalismo: "Vandalism in Porto Alegre",
  Chuva: "Rain in Porto Alegre",
  Incêndio: "Fires in Porto Alegre",
  eleições: "Elections in Porto Alegre",
  Desastres: "Disasters and accidents in Porto Alegre",
  "Artes Cênicas": "Performing arts in Porto Alegre",
  "Transporte Público": "Public transport in Porto Alegre",
  "Assistência Social": "Social services in Porto Alegre",
  "População de Rua": "Homelessness in Porto Alegre",
  "Situação de rua": "Homelessness in Porto Alegre",
  "Ruas e avenidas": "Streets in Porto Alegre",
  "Livro e Literatura": "Literature of Porto Alegre",
  "Artes Visuais": "Art of Porto Alegre",
  "Indústria e Comércio": "Industry in Porto Alegre",
  "Fios Soltos": "Overhead power lines in Porto Alegre",

  Cachorro: "Dogs of Rio Grande do Sul",

  Infográfico: "Information graphics of Brazil",
  Dengue: "Dengue in Brazil",
  Vôlei: "Volleyball in Brazil",
  Handebol: "Handball in Brazil",
  Idosos: "Geriatrics in Brazil",
  Campeonato: "Competitions in Brazil",
  Concurso: "Competitions in Brazil",
  Posse: "Oaths of office in Brazil",
  Servidor: "Civil servants of Brazil",
  Espetáculo: "Shows in Rio Grande do Sul",
  Aluno: "Students in Brazil",
  Abertura: "Opening ceremonies in Brazil",
  Inauguração: "Inaugurations in Brazil",
  Licitações: "Auctions in Brazil",
  Abrigos: "Shelters in Brazil",
  Albergues: "Shelters in Brazil",
  Acolhimento: "Shelters in Brazil",
  Transparência: "Open government in Brazil",
  Acessibilidade: "Accessibility in Brazil",
  Empreendedorismo: "Entrepreneurship in Brazil",
  Adolescente: "Teenagers of Brazil",
  Vacinação: "Vaccinations in Brazil",
  Vacina: "Vaccinations in Brazil",
  Poda: "Pruning in Brazil",
  Embaixada: "Embassies in Brazil",
  Consulado: "Diplomatic missions to Brazil",
  Juventude: "Youth in Brazil",
  Eclipse: "Solar eclipses in Brazil",
  Gato: "Cats of Brazil",
  Ambulantes: "Street vendors in Brazil",
  Gripe: "Influenza in Brazil",
  Ginástica: "Gymnastics in Brazil",
  Tecnologia: "Technology in Brazil",
  Páscoa: "Easter in Brazil",
  Pedestre: "Pedestrians in Brazil",
  Resgate: "Search and rescue in Brazil",
  Trilha: "Trails in Brazil",
  Medicina: "Medicine in Brazil",
  Voluntariado: "Volunteering in Brazil",
  "febre amarela": "Yellow fever in Brazil",
  "Comissão da Pessoa com Deficiência": "Disability in Brazil",
  "Bloqueio químico": "Fogging against Aedes aegypti in Brazil",
  "Vigilância de Alimentos": "Food security in Brazil",
  "Direitos Humanos": "Human rights in Brazil",
  "Artes Plásticas": "Visual arts of Brazil",
  "Educação Ambiental": "Environmental education in Brazil",
  "Ação Social": "Social work in Brazil",
  "Plano Diretor": "Urban planning in Brazil",
  "Medicina Veterinária": "Veterinary medicine in Brazil",
  "Iluminação Pública": "Street lights in Brazil",
  "vacina contra a Dengue": "Dengue vaccine in Brazil",
  "troféu Prefeito Inovador": "Awards of Brazil",

  "Dia da Mulher": metadata =>
    `International Women's Day in ${getYear(
      metadata.humanReadableDate
    )} in Brazil`,
  Criança: metadata =>
    `Children of Brazil in ${getYear(metadata.humanReadableDate)}`,

  Transexualidade: "Transgender in South America",

  Palestra: "Presentations",
  Oficina: "Workshops (meetings)",
  "síndrome de down": "Down syndrome",
  Investigação: "Inquiry",
  Microcefalia: "Microcephaly",
  Consultório: "Medical offices",
  "Educação Infantil": "Educating children",
  "Doenças da Pele": "Dermatitis",
  "Educação no Trânsito": "Road safety education",
  "Educação Fundamental": "Primary education",
  "Educação Básica": "Primary education",
  "Alteração de vias": "Road traffic management",
  "Transtornos no trânsito": "Road traffic management",
  "Consulta Pública": "Public consultation",
  Seminário: "Seminars",
  Capina: "Weed control",
  Mutirão: "Campaigns",
  Campanha: "Campaigns",
  "Força-Tarefa": "Task forces",
  "Adoção de animais": "Animal adoption",
  "Educação Especial": "Special education",
  "Carnaval de Rua": "Street carnival",
  Cidadania: "Civil society",
  Debate: "Debating",
  Interdição: "Forced business closures",
  "Material Escolar": "School supplies",
  "Inclusão Social": "Social inclusion",
  Urbanismo: "Urbanism",
  Mulher: "Gender equality",
  Audiência: "Audiences (meeting)",
  Medicamentos: "Pharmaceutical drugs",
  Sangue: "Blood collection",
  Caminhada: "Walks (event)",
  "Resíduos Sólidos": "Solid waste management",
  "Bloqueio no trânsito": "Closed roads",
  Apreensão: "Confiscation",
  "Ação Integrada": "Community-driven programs",
  "Educação Técnica": "Career and technical education",
  "Saúde Bucal": "Oral health",
  Apresentação: "Presentations",
  Convite: "Invitations",
  Lançamento: "Product launches",
  Pavimentação: "Road paving",
  Flashmob: "Flash mobs",
  CMDUA: "Urban development",
  "Trabalho e Emprego": "Employment",
  "Centro de triagem": "Screening centers",
  Monitoramento: "Monitoring",
  Premiação: "Prizes",
  "Cidades Inteligentes": "Smart cities",
  "Câncer Bucal": "Oral cancer",
  Nutrição: "Nutrition",
  "Saúde Nutricional e Amamentação": "Breastfeeding",
  Live: "Video streaming",
  "Atenção Primária à Saúde (APS)": "Primary health care",
};