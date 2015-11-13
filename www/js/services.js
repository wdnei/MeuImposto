angular.module('starter.services', [])

.factory('CfopService', function() {
    var cfops=[
    {
        "id": "1000",
        "idPai": 0,
        "idLink": "1000-entradas-ou-aquisicoes-de-servicos-no-estado",
        "titulo": "1000 - Entradas ou aquisições de serviços no Estado",
        "descricao": "Classificam-se, neste grupo, as operações ou prestações em que o estabelecimento remetente esteja localizado na mesma unidade da Federação do destinatário."
    },
    {
        "id": "1100",
        "idPai": "1000",
        "idLink": "1100-compras-para-industrializacao-comercializacao-ou-prestacao-de-servicos",
        "titulo": "1100 - Compras para industrialização, comercialização ou prestação de serviços"
    },
    {
        "id": "1150",
        "idPai": "1000",
        "idLink": "1150-transferencias-para-industrializacao-comercializacao-ou-prestacao-de-servicos",
        "titulo": "1150 - Transferências para industrialização, comercialização ou prestação de serviços"
    },
    {
        "id": "1200",
        "idPai": "1000",
        "idLink": "1200-devolucoes-de-vendas-de-producao-propria-de-terceiros-ou-anulacoes-de-valores",
        "titulo": "1200 - Devoluções de vendas de produção própria, de terceiros ou anulações de valores"
    },
    {
        "id": "1250",
        "idPai": "1000",
        "idLink": "1250-compras-de-energia-eletrica",
        "titulo": "1250 - Compras de energia elétrica"
    },
    {
        "id": "1300",
        "idPai": "1000",
        "idLink": "1300-aquisicoes-de-servicos-de-comunicacao",
        "titulo": "1300 - Aquisições de serviços de comunicação"
    },
    {
        "id": "1350",
        "idPai": "1000",
        "idLink": "1350-aquisicoes-de-servicos-de-transporte",
        "titulo": "1350 - Aquisições de serviços de transporte"
    },
    {
        "id": "1400",
        "idPai": "1000",
        "idLink": "1400-entradas-de-mercadorias-sujeitas-ao-regime-de-substituicao-tributaria",
        "titulo": "1400 - Entradas de mercadorias sujeitas ao regime de substituição tributária "
    },
    {
        "id": "1450",
        "idPai": "1000",
        "idLink": "1450-sistemas-de-integracao",
        "titulo": "1450 - Sistemas de integração"
    },
    {
        "id": "1500",
        "idPai": "1000",
        "idLink": "1500-entradas-de-mercadorias-remetidas-com-fim-especifico-de-exportacao-e-eventuais-devolucoes",
        "titulo": "1500 - Entradas de mercadorias remetidas com fim específico de exportação e eventuais devoluções"
    },
    {
        "id": "1550",
        "idPai": "1000",
        "idLink": "1550-operacoes-com-bens-de-ativo-imobilizado-e-materiais-para-uso-ou-consumo",
        "titulo": "1550 - Operações com bens de ativo imobilizado e materiais para uso ou consumo"
    },
    {
        "id": "1600",
        "idPai": "1000",
        "idLink": "1600-creditos-e-ressarcimentos-de-icms",
        "titulo": "1600 - Créditos e ressarcimentos de ICMS"
    },
    {
        "id": "1650",
        "idPai": "1000",
        "idLink": "1650-entradas-de-combustiveis-derivados-ou-nao-de-petroleo-e-lubrificantes",
        "titulo": "1650 - Entradas de combustíveis, derivados ou não de petróleo e lubrificantes"
    },
    {
        "id": "1900",
        "idPai": "1000",
        "idLink": "1900-outras-entradas-de-mercadorias-ou-aquisicoes-de-servicos",
        "titulo": "1900 - Outras entradas de mercadorias ou aquisições de serviços"
    },
    {
        "id": "1101",
        "idPai": "1100",
        "idLink": "1101-compra-para-industrializacao",
        "titulo": "1101 - Compra para industrialização",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização. Também serão classificadas neste código as entradas de mercadorias em estabelecimento industrial de cooperativa recebidas de seus cooperados ou de estabelecimento de outra cooperativa."
    },
    {
        "id": "1102",
        "idPai": "1100",
        "idLink": "1102-compra-para-comercializacao",
        "titulo": "1102 - Compra para comercialização",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas. Também serão classificadas neste código as entradas de mercadorias em estabelecimento comercial de cooperativa recebidas de seus cooperados ou de estabelecimento de outra cooperativa."
    },
    {
        "id": "1111",
        "idPai": "1100",
        "idLink": "1111-compra-para-industrializacao-de-mercadoria-recebida-anteriormente-em-consignacao-industrial",
        "titulo": "1111 - Compra para industrialização de mercadoria recebida anteriormente em consignação industrial",
        "descricao": "Classificam-se neste código as compras efetivas de mercadorias a serem utilizadas em processo de industrialização, recebidas anteriormente a título de consignação industrial."
    },
    {
        "id": "1113",
        "idPai": "1100",
        "idLink": "1113-compra-para-comercializacao-de-mercadoria-recebida-anteriormente-em-consignacao-mercantil",
        "titulo": "1113 - Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as compras efetivas de mercadorias recebidas anteriormente a título de consignação mercantil."
    },
    {
        "id": "1116",
        "idPai": "1100",
        "idLink": "1116-compra-para-industrializacao-originada-de-encomenda-para-recebimento-futuro",
        "titulo": "1116 - Compra para industrialização originada de encomenda para recebimento futuro",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, quando da entrada real da mercadoria, cuja aquisição tenha sido classificada no código \"1.922 – Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\"."
    },
    {
        "id": "1117",
        "idPai": "1100",
        "idLink": "1117-compra-para-comercializacao-originada-de-encomenda-para-recebimento-futuro",
        "titulo": "1117 - Compra para comercialização originada de encomenda para recebimento futuro",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas, quando da entrada real da mercadoria, cuja aquisição tenha sido classificada no código \"1.922 – Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\"."
    },
    {
        "id": "1118",
        "idPai": "1100",
        "idLink": "1118-compra-de-mercadoria-para-comercializacao-pelo-adquirente-originario-entregue-pelo-vendedor-remetente-ao-destinatario-em-venda-a-ordem",
        "titulo": "1118 - Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem",
        "descricao": "Classificam-se neste código as compras de mercadorias já comercializadas, que, sem transitar pelo estabelecimento do adquirente originário, sejam entregues pelo vendedor remetente diretamente ao destinatário, em operação de venda à ordem, cuja venda seja classificada, pelo adquirente originário, no código \"5.120 – Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem\"."
    },
    {
        "id": "1120",
        "idPai": "1100",
        "idLink": "1120-compra-para-industrializacao-em-venda-a-ordem-ja-recebida-do-vendedor-remetente",
        "titulo": "1120 - Compra para industrialização, em venda à ordem, já recebida do vendedor remetente",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, em vendas à ordem, já recebidas do vendedor remetente, por ordem do adquirente originário."
    },
    {
        "id": "1121",
        "idPai": "1100",
        "idLink": "1121-compra-para-comercializacao-em-venda-a-ordem-ja-recebida-do-vendedor-remetente",
        "titulo": "1121 - Compra para comercialização, em venda à ordem, já recebida do vendedor remetente",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas, em vendas à ordem, já recebidas do vendedor remetente por ordem do adquirente originário."
    },
    {
        "id": "1122",
        "idPai": "1100",
        "idLink": "1122-compra-para-industrializacao-em-que-a-mercadoria-foi-remetida-pelo-fornecedor-ao-industrializador-sem-transitar-pelo-estabelecimento-adquirente",
        "titulo": "1122 - Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, remetidas pelo fornecedor para o industrializador sem que a mercadoria tenha transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "1124",
        "idPai": "1100",
        "idLink": "1124-industrializacao-efetuada-por-outra-empresa",
        "titulo": "1124 - Industrialização efetuada por outra empresa",
        "descricao": "Classificam-se neste código as entradas de mercadorias industrializadas por terceiros, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial. Quando a industrialização efetuada se referir a bens do ativo imobilizado ou de mercadorias para uso ou consumo do estabelecimento encomendante, a entrada deverá ser classificada nos códigos \"1.551 – Compra de bem para o ativo imobilizado\" ou \"1.556 – Compra de material para uso ou consumo\"."
    },
    {
        "id": "1125",
        "idPai": "1100",
        "idLink": "1125-industrializacao-efetuada-por-outra-empresa-quando-a-mercadoria-remetida-para-utilizacao-no-processo-de-industrializacao-nao-transitou-pelo-estabelecimento-adquirente-da-mercadoria",
        "titulo": "1125 - Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria",
        "descricao": "Classificam-se neste código as entradas de mercadorias industrializadas por outras empresas, em que as mercadorias remetidas para utilização no processo de industrialização não transitaram pelo estabelecimento do adquirente das mercadorias, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial. Quando a industrialização efetuada se referir a bens do ativo imobilizado ou de mercadorias para uso ou consumo do estabelecimento encomendante, a entrada deverá ser classificada nos códigos \"1.551 – Compra de bem para o ativo imobilizado\" ou \"1.556 – Compra de material para uso ou consumo\"."
    },
    {
        "id": "1126",
        "idPai": "1100",
        "idLink": "1126-compra-para-utilizacao-na-prestacao-de-servico",
        "titulo": "1126 - Compra para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as entradas de mercadorias a serem utilizadas nas prestações de serviços."
    },
    {
        "id": "1151",
        "idPai": "1150",
        "idLink": "1151-transferencia-para-industrializacao",
        "titulo": "1151 - Transferência para industrialização",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem utilizadas em processo de industrialização."
    },
    {
        "id": "1152",
        "idPai": "1150",
        "idLink": "1152-transferencia-para-comercializacao",
        "titulo": "1152 - Transferência para comercialização",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem comercializadas."
    },
    {
        "id": "1153",
        "idPai": "1150",
        "idLink": "1153-transferencia-de-energia-eletrica-para-distribuicao",
        "titulo": "1153 - Transferência de energia elétrica para distribuição",
        "descricao": "Classificam-se neste código as entradas de energia elétrica recebida em transferência de outro estabelecimento da mesma empresa, para distribuição."
    },
    {
        "id": "1154",
        "idPai": "1150",
        "idLink": "1154-transferencia-para-utilizacao-na-prestacao-de-servico",
        "titulo": "1154 - Transferência para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem utilizadas nas prestações de serviços."
    },
    {
        "id": "1201",
        "idPai": "1200",
        "idLink": "1201-devolucao-de-venda-de-producao-do-estabelecimento",
        "titulo": "1201 - Devolução de venda de produção do estabelecimento",
        "descricao": "Classificam-se neste código as devoluções de vendas de produtos industrializados pelo estabelecimento, cujas saídas tenham sido classificadas como “Venda de produção do estabelecimento”."
    },
    {
        "id": "1202",
        "idPai": "1200",
        "idLink": "1202-devolucao-de-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "1202 - Devolução de venda de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as devoluções de vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de industrialização no estabelecimento, cujas saídas tenham sido classificadas como \"Venda de mercadoria adquirida ou recebida de terceiros\"."
    },
    {
        "id": "1203",
        "idPai": "1200",
        "idLink": "1203-devolucao-de-venda-de-producao-do-estabelecimento-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "1203 - Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as devoluções de vendas de produtos industrializados pelo estabelecimento, cujas saídas foram classificadas no código “5.109 - Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio”."
    },
    {
        "id": "1204",
        "idPai": "1200",
        "idLink": "1204-devolucao-de-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "1204 - Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as devoluções de vendas de mercadorias adquiridas ou recebidas de terceiros, cujas saídas foram classificadas no código \"5.110 – Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"."
    },
    {
        "id": "1205",
        "idPai": "1200",
        "idLink": "1205-anulacao-de-valor-relativo-a-prestacao-de-servico-de-comunicacao",
        "titulo": "1205 - Anulação de valor relativo à prestação de serviço de comunicação",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de prestações de serviços de comunicação."
    },
    {
        "id": "1206",
        "idPai": "1200",
        "idLink": "1206-anulacao-de-valor-relativo-a-prestacao-de-servico-de-transporte",
        "titulo": "1206 - Anulação de valor relativo à prestação de serviço de transporte",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de prestações de serviços de transporte."
    },
    {
        "id": "1207",
        "idPai": "1200",
        "idLink": "1207-anulacao-de-valor-relativo-a-venda-de-energia-eletrica",
        "titulo": "1207 - Anulação de valor relativo à venda de energia elétrica",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de venda de energia elétrica."
    },
    {
        "id": "1208",
        "idPai": "1200",
        "idLink": "1208-devolucao-de-producao-do-estabelecimento-remetida-em-transferencia",
        "titulo": "1208 - Devolução de produção do estabelecimento, remetida em transferência",
        "descricao": "Classificam-se neste código as devoluções de produtos industrializados pelo estabelecimento, transferidos para outros estabelecimentos da mesma empresa."
    },
    {
        "id": "1209",
        "idPai": "1200",
        "idLink": "1209-devolucao-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-em-transferencia",
        "titulo": "1209 - Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas ou recebidas de terceiros, transferidas para outros estabelecimentos da mesma empresa."
    },
    {
        "id": "1251",
        "idPai": "1250",
        "idLink": "1251-compra-de-energia-eletrica-para-distribuicao-ou-comercializacao",
        "titulo": "1251 - Compra de energia elétrica para distribuição ou comercialização",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada em sistema de distribuição ou comercialização. Também serão classificadas neste código as compras de energia elétrica por cooperativas para distribuição aos seus cooperados."
    },
    {
        "id": "1252",
        "idPai": "1250",
        "idLink": "1252-compra-de-energia-eletrica-por-estabelecimento-industrial",
        "titulo": "1252 - Compra de energia elétrica por estabelecimento industrial",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada no processo de industrialização. Também serão classificadas neste código as compras de energia elétrica utilizada por estabelecimento industrial de cooperativa."
    },
    {
        "id": "1253",
        "idPai": "1250",
        "idLink": "1253-compra-de-energia-eletrica-por-estabelecimento-comercial",
        "titulo": "1253 - Compra de energia elétrica por estabelecimento comercial",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento comercial. Também serão classificadas neste código as compras de energia elétrica utilizada por estabelecimento comercial de cooperativa."
    },
    {
        "id": "1254",
        "idPai": "1250",
        "idLink": "1254-compra-de-energia-eletrica-por-estabelecimento-prestador-de-servico-de-transporte",
        "titulo": "1254 - Compra de energia elétrica por estabelecimento prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento prestador de serviços de transporte."
    },
    {
        "id": "1255",
        "idPai": "1250",
        "idLink": "1255-compra-de-energia-eletrica-por-estabelecimento-prestador-de-servico-de-comunicacao",
        "titulo": "1255 - Compra de energia elétrica por estabelecimento prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento prestador de serviços de comunicação."
    },
    {
        "id": "1256",
        "idPai": "1250",
        "idLink": "1256-compra-de-energia-eletrica-por-estabelecimento-de-produtor-rural",
        "titulo": "1256 - Compra de energia elétrica por estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento de produtor rural."
    },
    {
        "id": "1257",
        "idPai": "1250",
        "idLink": "1257-compra-de-energia-eletrica-para-consumo-por-demanda-contratada",
        "titulo": "1257 - Compra de energia elétrica para consumo por demanda contratada",
        "descricao": "Classificam-se neste código as compras de energia elétrica para consumo por demanda contratada, que prevalecerá sobre os demais códigos deste subgrupo."
    },
    {
        "id": "1301",
        "idPai": "1300",
        "idLink": "1301-aquisicao-de-servico-de-comunicacao-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "1301 - Aquisição de serviço de comunicação para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados nas prestações de serviços da mesma natureza."
    },
    {
        "id": "1302",
        "idPai": "1300",
        "idLink": "1302-aquisicao-de-servico-de-comunicacao-por-estabelecimento-industrial",
        "titulo": "1302 - Aquisição de serviço de comunicação por estabelecimento industrial",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento industrial. Também serão classificadas neste código as aquisições de serviços de comunicação utilizados por estabelecimento industrial de cooperativa."
    },
    {
        "id": "1303",
        "idPai": "1300",
        "idLink": "1303-aquisicao-de-servico-de-comunicacao-por-estabelecimento-comercial",
        "titulo": "1303 - Aquisição de serviço de comunicação por estabelecimento comercial",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento comercial. Também serão classificadas neste código as aquisições de serviços de comunicação utilizados por estabelecimento comercial de cooperativa."
    },
    {
        "id": "1304",
        "idPai": "1300",
        "idLink": "1304-aquisicao-de-servico-de-comunicacao-por-estabelecimento-de-prestador-de-servico-de-transporte",
        "titulo": "1304 - Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento prestador de serviço de transporte."
    },
    {
        "id": "1305",
        "idPai": "1300",
        "idLink": "1305-aquisicao-de-servico-de-comunicacao-por-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "1305 - Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "1306",
        "idPai": "1300",
        "idLink": "1306-aquisicao-de-servico-de-comunicacao-por-estabelecimento-de-produtor-rural",
        "titulo": "1306 - Aquisição de serviço de comunicação por estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento de produtor rural."
    },
    {
        "id": "1351",
        "idPai": "1350",
        "idLink": "1351-aquisicao-de-servico-de-transporte-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "1351 - Aquisição de serviço de transporte para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados nas prestações de serviços da mesma natureza."
    },
    {
        "id": "1352",
        "idPai": "1350",
        "idLink": "1352-aquisicao-de-servico-de-transporte-por-estabelecimento-industrial",
        "titulo": "1352 - Aquisição de serviço de transporte por estabelecimento industrial",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento industrial. Também serão classificadas neste código as aquisições de serviços de transporte utilizados por estabelecimento industrial de cooperativa."
    },
    {
        "id": "1353",
        "idPai": "1350",
        "idLink": "1353-aquisicao-de-servico-de-transporte-por-estabelecimento-comercial",
        "titulo": "1353 - Aquisição de serviço de transporte por estabelecimento comercial",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento comercial. Também serão classificadas neste código as aquisições de serviços de transporte utilizados por estabelecimento comercial de cooperativa."
    },
    {
        "id": "1354",
        "idPai": "1350",
        "idLink": "1354-aquisicao-de-servico-de-transporte-por-estabelecimento-de-prestador-de-servico-de-comunicacao",
        "titulo": "1354 - Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento prestador de serviços de comunicação."
    },
    {
        "id": "1355",
        "idPai": "1350",
        "idLink": "1355-aquisicao-de-servico-de-transporte-por-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "1355 - Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "1356",
        "idPai": "1350",
        "idLink": "1356-aquisicao-de-servico-de-transporte-por-estabelecimento-de-produtor-rural",
        "titulo": "1356 - Aquisição de serviço de transporte por estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento de produtor rural."
    },
    {
        "id": "1401",
        "idPai": "1400",
        "idLink": "1401-compra-para-industrializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1401 - Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, decorrentes de operações com mercadorias sujeitas ao regime de substituição tributária. Também serão classificadas neste código as compras por estabelecimento industrial de cooperativa de mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "1403",
        "idPai": "1400",
        "idLink": "1403-compra-para-comercializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1403 - Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas, decorrentes de operações com mercadorias sujeitas ao regime de substituição tributária. Também serão classificadas neste código as compras de mercadorias sujeitas ao regime de substituição tributária em estabelecimento comercial de cooperativa."
    },
    {
        "id": "1406",
        "idPai": "1400",
        "idLink": "1406-compra-de-bem-para-o-ativo-imobilizado-cuja-mercadoria-esta-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1406 - Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de bens destinados ao ativo imobilizado do estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "1407",
        "idPai": "1400",
        "idLink": "1407-compra-de-mercadoria-para-uso-ou-consumo-cuja-mercadoria-esta-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1407 - Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de mercadorias destinadas ao uso ou consumo do estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "1408",
        "idPai": "1400",
        "idLink": "1408-transferencia-para-industrializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1408 - Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem industrializadas no estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "1409",
        "idPai": "1400",
        "idLink": "1409-transferencia-para-comercializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1409 - Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem comercializadas, decorrentes de operações sujeitas ao regime de substituição tributária."
    },
    {
        "id": "1410",
        "idPai": "1400",
        "idLink": "1410-devolucao-de-venda-de-producao-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "1410 - Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de produtos industrializados e vendidos pelo estabelecimento, cujas saídas tenham sido classificadas como \"Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"."
    },
    {
        "id": "1411",
        "idPai": "1400",
        "idLink": "1411-devolucao-de-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1411 - Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de vendas de mercadorias adquiridas ou recebidas de terceiros, cujas saídas tenham sido classificadas como \"Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "1414",
        "idPai": "1400",
        "idLink": "1414-retorno-de-producao-do-estabelecimento-remetida-para-venda-fora-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "1414 - Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as entradas, em retorno, de produtos industrializados pelo estabelecimento, remetidos para vendas fora do estabelecimento, inclusive por meio de veículos, em operações com produtos sujeitos ao regime de substituição tributária, e não comercializadas."
    },
    {
        "id": "1415",
        "idPai": "1400",
        "idLink": "1415-retorno-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-para-venda-fora-do-estabelecimento-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "1415 - Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as entradas, em retorno, de mercadorias adquiridas ou recebidas de terceiros remetidas para vendas fora do estabelecimento, inclusive por meio de veículos, em operações com mercadorias sujeitas ao regime de substituição tributária, e não comercializadas."
    },
    {
        "id": "1451",
        "idPai": "1450",
        "idLink": "1451-retorno-de-animal-do-estabelecimento-produtor",
        "titulo": "1451 - Retorno de animal do estabelecimento produtor",
        "descricao": "Classificam-se neste código as entradas referentes ao retorno de animais criados pelo produtor no sistema integrado."
    },
    {
        "id": "1452",
        "idPai": "1450",
        "idLink": "1452-retorno-de-insumo-nao-utilizado-na-producao",
        "titulo": "1452 - Retorno de insumo não utilizado na produção",
        "descricao": "Classificam-se neste código o retorno de insumos não utilizados pelo produtor na criação de animais pelo sistema integrado."
    },
    {
        "id": "1501",
        "idPai": "1500",
        "idLink": "1501-entrada-de-mercadoria-recebida-com-fim-especifico-de-exportacao",
        "titulo": "1501 - Entrada de mercadoria recebida com fim específico de exportação",
        "descricao": "Classificam-se neste código as entradas de mercadorias em estabelecimento de trading company, empresa comercial exportadora ou outro estabelecimento do remetente, com fim específico de exportação."
    },
    {
        "id": "1503",
        "idPai": "1500",
        "idLink": "1503-entrada-decorrente-de-devolucao-de-produto-remetido-com-fim-especifico-de-exportacao-de-producao-do-estabelecimento",
        "titulo": "1503 - Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento",
        "descricao": "Classificam-se neste código as devoluções de produtos industrializados pelo estabelecimento, remetidos a trading company, a empresa comercial exportadora ou a outro estabelecimento do remetente, com fim específico de exportação, cujas saídas tenham sido classificadas no código \"5.501 – Remessa de produção do estabelecimento, com fim específico de exportação\"."
    },
    {
        "id": "1504",
        "idPai": "1500",
        "idLink": "1504-entrada-decorrente-de-devolucao-de-mercadoria-remetida-com-fim-especifico-de-exportacao-adquirida-ou-recebida-de-terceiros",
        "titulo": "1504 - Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas ou recebidas de terceiros remetidas a trading company, a empresa comercial exportadora ou a outro estabelecimento do remetente, com fim específico de exportação, cujas saídas tenham sido classificadas no código \"5.502 – Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação\"."
    },
    {
        "id": "1505",
        "idPai": "1500",
        "idLink": "1505-entrada-decorrente-de-devolucao-simbolica-de-mercadorias-remetidas-para-formacao-de-lote-de-exportacao-de-produtos-industrializados-ou-produzidos-pelo-proprio-estabelecimento",
        "titulo": "1505 - Entrada decorrente de devolução simbólica de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
        "descricao": "Classificam-se neste código as devoluções simbólicas de mercadorias remetidas para formação de lote de exportação, cujas saídas tenham sido classificadas no código \"5.504 - Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento\"."
    },
    {
        "id": "1506",
        "idPai": "1500",
        "idLink": "1506-entrada-decorrente-de-devolucao-simbolica-de-mercadorias-adquiridas-ou-recebidas-de-terceiros-remetidas-para-formacao-de-lote-de-exportacao",
        "titulo": "1506 - Entrada decorrente de devolução simbólica de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação.",
        "descricao": "Classificam-se neste código as devoluções simbólicas de mercadorias remetidas para formação de lote de exportação em armazéns alfandegados, entrepostos aduaneiros ou outros estabelecimentos que venham a ser regulamentados pela legislação tributária de cada Unidade Federada, efetuadas pelo estabelecimento depositário, cujas saídas tenham sido classificadas no código \"5.505 Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação\"."
    },
    {
        "id": "1551",
        "idPai": "1550",
        "idLink": "1551-compra-de-bem-para-o-ativo-imobilizado",
        "titulo": "1551 - Compra de bem para o ativo imobilizado",
        "descricao": "Classificam-se neste código as compras de bens destinados ao ativo imobilizado do estabelecimento."
    },
    {
        "id": "1552",
        "idPai": "1550",
        "idLink": "1552-transferencia-de-bem-do-ativo-imobilizado",
        "titulo": "1552 - Transferência de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as entradas de bens destinados ao ativo imobilizado recebidos em transferência de outro estabelecimento da mesma empresa."
    },
    {
        "id": "1553",
        "idPai": "1550",
        "idLink": "1553-devolucao-de-venda-de-bem-do-ativo-imobilizado",
        "titulo": "1553 - Devolução de venda de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as devoluções de vendas de bens do ativo imobilizado, cujas saídas tenham sido classificadas no código “5.551 - Venda de bem do ativo imobilizado”."
    },
    {
        "id": "1554",
        "idPai": "1550",
        "idLink": "1554-retorno-de-bem-do-ativo-imobilizado-remetido-para-uso-fora-do-estabelecimento",
        "titulo": "1554 - Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento",
        "descricao": "Classificam-se neste código as entradas por retorno de bens do ativo imobilizado remetidos para uso fora do estabelecimento, cujas saídas tenham sido classificadas no código “5.554 - Remessa de bem do ativo imobilizado para uso fora do estabelecimento”."
    },
    {
        "id": "1555",
        "idPai": "1550",
        "idLink": "1555-entrada-de-bem-do-ativo-imobilizado-de-terceiro-remetido-para-uso-no-estabelecimento",
        "titulo": "1555 - Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento",
        "descricao": "Classificam-se neste código as entradas de bens do ativo imobilizado de terceiros, remetidos para uso no estabelecimento."
    },
    {
        "id": "1556",
        "idPai": "1550",
        "idLink": "1556-compra-de-material-para-uso-ou-consumo",
        "titulo": "1556 - Compra de material para uso ou consumo",
        "descricao": "Classificam-se neste código as compras de mercadorias destinadas ao uso ou consumo do estabelecimento."
    },
    {
        "id": "1557",
        "idPai": "1550",
        "idLink": "1557-transferencia-de-material-para-uso-ou-consumo",
        "titulo": "1557 - Transferência de material para uso ou consumo",
        "descricao": "Classificam-se neste código as entradas de materiais para uso ou consumo recebidos em transferência de outro estabelecimento da mesma empresa."
    },
    {
        "id": "1601",
        "idPai": "1600",
        "idLink": "1601-recebimento-por-transferencia-de-credito-de-icms",
        "titulo": "1601 - Recebimento, por transferência, de crédito de ICMS",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro de créditos de ICMS, recebidos por transferência de outras empresas."
    },
    {
        "id": "1602",
        "idPai": "1600",
        "idLink": "1602-recebimento-por-transferencia-de-saldo-credor-de-icms-de-outro-estabelecimento-da-mesma-empresa-para-compensacao-de-saldo-devedor-de-icms",
        "titulo": "1602 - Recebimento, por transferência, de saldo credor de ICMS de outro estabelecimento da mesma empresa, para compensação de saldo devedor de ICMS",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro da transferência de saldos credores de ICMS recebidos de outros estabelecimentos da mesma empresa, destinados à compensação do saldo devedor do estabelecimento, inclusive no caso de apuração centralizada do imposto."
    },
    {
        "id": "1603",
        "idPai": "1600",
        "idLink": "1603-ressarcimento-de-icms-retido-por-substituicao-tributaria",
        "titulo": "1603 - Ressarcimento de ICMS retido por substituição tributária",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro de ressarcimento de ICMS retido por substituição tributária a contribuinte substituído, efetuado pelo contribuinte substituto, ou, ainda, quando o ressarcimento for apropriado pelo próprio contribuinte substituído, nas hipóteses previstas na legislação aplicável."
    },
    {
        "id": "1604",
        "idPai": "1600",
        "idLink": "1604-lancamento-do-credito-relativo-a-compra-de-bem-para-o-ativo-imobilizado",
        "titulo": "1604 - Lançamento do crédito relativo à compra de bem para o ativo imobilizado",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro da apropriação de crédito de bens do ativo imobilizado."
    },
    {
        "id": "1605",
        "idPai": "1600",
        "idLink": "1605-recebimento-por-transferencia-de-saldo-devedor-de-icms-de-outro-estabelecimento-da-mesma-empresa",
        "titulo": "1605 - Recebimento, por transferência, de saldo devedor de ICMS de outro estabelecimento da mesma empresa.",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro da transferência de saldo devedor de ICMS recebido de outro estabelecimento da mesma empresa, para efetivação da apuração centralizada do imposto."
    },
    {
        "id": "1651",
        "idPai": "1650",
        "idLink": "1651-compra-de-combustivel-ou-lubrificante-para-industrializacao-subsequeente",
        "titulo": "1651 - Compra de combustível ou lubrificante para industrialização subseqüente",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem utilizados em processo de industrialização do próprio produto."
    },
    {
        "id": "1652",
        "idPai": "1650",
        "idLink": "1652-compra-de-combustivel-ou-lubrificante-para-comercializacao",
        "titulo": "1652 - Compra de combustível ou lubrificante para comercialização",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem comercializados."
    },
    {
        "id": "1653",
        "idPai": "1650",
        "idLink": "1653-compra-de-combustivel-ou-lubrificante-por-consumidor-ou-usuario-final",
        "titulo": "1653 - Compra de combustível ou lubrificante por consumidor ou usuário final",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem consumidos em processo de industrialização de outros produtos, na prestação de serviços ou por usuário final."
    },
    {
        "id": "1658",
        "idPai": "1650",
        "idLink": "1658-transferencia-de-combustivel-e-lubrificante-para-industrializacao",
        "titulo": "1658 - Transferência de combustível e lubrificante para industrialização",
        "descricao": "Classificam-se neste código as entradas de combustíveis e lubrificantes recebidas em transferência de outro estabelecimento da mesma empresa para serem utilizados em processo de industrialização do próprio produto."
    },
    {
        "id": "1659",
        "idPai": "1650",
        "idLink": "1659-transferencia-de-combustivel-e-lubrificante-para-comercializacao",
        "titulo": "1659 - Transferência de combustível e lubrificante para comercialização",
        "descricao": "Classificam-se neste código as entradas de combustíveis e lubrificantes recebidas em transferência de outro estabelecimento da mesma empresa para serem comercializados."
    },
    {
        "id": "1660",
        "idPai": "1650",
        "idLink": "1660-devolucao-de-venda-de-combustivel-ou-lubrificante-destinado-a-industrializacao-subsequeente",
        "titulo": "1660 - Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente",
        "descricao": "Classificam-se neste código as devoluções de vendas de combustíveis ou lubrificantes, cujas saídas tenham sido classificadas como  “Venda de combustível ou lubrificante destinado à industrialização subseqüente”."
    },
    {
        "id": "1661",
        "idPai": "1650",
        "idLink": "1661-devolucao-de-venda-de-combustivel-ou-lubrificante-destinado-a-comercializacao",
        "titulo": "1661 - Devolução de venda de combustível ou lubrificante destinado à comercialização",
        "descricao": "Classificam-se neste código as devoluções de vendas de combustíveis ou lubrificantes, cujas saídas tenham sido classificadas como “Venda de combustíveis ou lubrificantes para comercialização”."
    },
    {
        "id": "1662",
        "idPai": "1650",
        "idLink": "1662-devolucao-de-venda-de-combustivel-ou-lubrificante-destinado-a-consumidor-ou-usuario-final",
        "titulo": "1662 - Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final",
        "descricao": "Classificam-se neste código as devoluções de vendas de combustíveis ou lubrificantes, cujas saídas tenham sido classificadas como “Venda de combustíveis ou lubrificantes por consumidor ou usuário final”."
    },
    {
        "id": "1663",
        "idPai": "1650",
        "idLink": "1663-entrada-de-combustivel-ou-lubrificante-para-armazenagem",
        "titulo": "1663 - Entrada de combustível ou lubrificante para armazenagem",
        "descricao": "Classificam-se neste código as entradas de combustíveis ou lubrificantes para armazenagem."
    },
    {
        "id": "1664",
        "idPai": "1650",
        "idLink": "1664-retorno-de-combustivel-ou-lubrificante-remetido-para-armazenagem",
        "titulo": "1664 - Retorno de combustível ou lubrificante remetido para armazenagem",
        "descricao": "Classificam-se neste código as entradas, ainda que simbólicas, por retorno de combustíveis ou lubrificantes, remetidos para armazenagem."
    },
    {
        "id": "1901",
        "idPai": "1900",
        "idLink": "1901-entrada-para-industrializacao-por-encomenda",
        "titulo": "1901 - Entrada para industrialização por encomenda",
        "descricao": "Classificam-se neste código as entradas de insumos recebidos para industrialização por encomenda de outra empresa ou de outro estabelecimento da mesma empresa."
    },
    {
        "id": "1902",
        "idPai": "1900",
        "idLink": "1902-retorno-de-mercadoria-remetida-para-industrializacao-por-encomenda",
        "titulo": "1902 - Retorno de mercadoria remetida para industrialização por encomenda",
        "descricao": "Classificam-se neste código o retorno dos insumos remetidos para industrialização por encomenda, incorporados ao produto final pelo estabelecimento industrializador."
    },
    {
        "id": "1903",
        "idPai": "1900",
        "idLink": "1903-entrada-de-mercadoria-remetida-para-industrializacao-e-nao-aplicada-no-referido-processo",
        "titulo": "1903 - Entrada de mercadoria remetida para industrialização e não aplicada no referido processo",
        "descricao": "Classificam-se neste código as entradas em devolução de insumos remetidos para industrialização e não aplicados no referido processo."
    },
    {
        "id": "1904",
        "idPai": "1900",
        "idLink": "1904-retorno-de-remessa-para-venda-fora-do-estabelecimento",
        "titulo": "1904 - Retorno de remessa para venda fora do estabelecimento",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias remetidas para venda fora do estabelecimento, inclusive por meio de veículos, e não comercializadas."
    },
    {
        "id": "1905",
        "idPai": "1900",
        "idLink": "1905-entrada-de-mercadoria-recebida-para-deposito-em-deposito-fechado-ou-armazem-geral",
        "titulo": "1905 - Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas para depósito em depósito fechado ou armazém geral."
    },
    {
        "id": "1906",
        "idPai": "1900",
        "idLink": "1906-retorno-de-mercadoria-remetida-para-deposito-fechado-ou-armazem-geral",
        "titulo": "1906 - Retorno de mercadoria remetida para depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias remetidas para depósito em depósito fechado ou armazém geral."
    },
    {
        "id": "1907",
        "idPai": "1900",
        "idLink": "1907-retorno-simbolico-de-mercadoria-remetida-para-deposito-fechado-ou-armazem-geral",
        "titulo": "1907 - Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as entradas em retorno simbólico de mercadorias remetidas para depósito em depósito fechado ou armazém geral, quando as mercadorias depositadas tenham sido objeto de saída a qualquer título e que não tenham retornado ao estabelecimento depositante."
    },
    {
        "id": "1908",
        "idPai": "1900",
        "idLink": "1908-entrada-de-bem-por-conta-de-contrato-de-comodato",
        "titulo": "1908 - Entrada de bem por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as entradas de bens recebidos em cumprimento de contrato de comodato."
    },
    {
        "id": "1909",
        "idPai": "1900",
        "idLink": "1909-retorno-de-bem-remetido-por-conta-de-contrato-de-comodato",
        "titulo": "1909 - Retorno de bem remetido por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as entradas de bens recebidos em devolução após cumprido o contrato de comodato."
    },
    {
        "id": "1910",
        "idPai": "1900",
        "idLink": "1910-entrada-de-bonificacao-doacao-ou-brinde",
        "titulo": "1910 - Entrada de bonificação, doação ou brinde",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas a título de bonificação, doação ou brinde."
    },
    {
        "id": "1911",
        "idPai": "1900",
        "idLink": "1911-entrada-de-amostra-gratis",
        "titulo": "1911 - Entrada de amostra grátis",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas a título de amostra grátis."
    },
    {
        "id": "1912",
        "idPai": "1900",
        "idLink": "1912-entrada-de-mercadoria-ou-bem-recebido-para-demonstracao",
        "titulo": "1912 - Entrada de mercadoria ou bem recebido para demonstração",
        "descricao": "Classificam-se neste código as entradas de mercadorias ou bens recebidos para demonstração."
    },
    {
        "id": "1913",
        "idPai": "1900",
        "idLink": "1913-retorno-de-mercadoria-ou-bem-remetido-para-demonstracao",
        "titulo": "1913 - Retorno de mercadoria ou bem remetido para demonstração",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias ou bens remetidos para demonstração."
    },
    {
        "id": "1914",
        "idPai": "1900",
        "idLink": "1914-retorno-de-mercadoria-ou-bem-remetido-para-exposicao-ou-feira",
        "titulo": "1914 - Retorno de mercadoria ou bem remetido para exposição ou feira",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias ou bens remetidos para exposição ou feira."
    },
    {
        "id": "1915",
        "idPai": "1900",
        "idLink": "1915-entrada-de-mercadoria-ou-bem-recebido-para-conserto-ou-reparo",
        "titulo": "1915 - Entrada de mercadoria ou bem recebido para conserto ou reparo",
        "descricao": "Classificam-se neste código as entradas de mercadorias ou bens recebidos para conserto ou reparo."
    },
    {
        "id": "1916",
        "idPai": "1900",
        "idLink": "1916-retorno-de-mercadoria-ou-bem-remetido-para-conserto-ou-reparo",
        "titulo": "1916 - Retorno de mercadoria ou bem remetido para conserto ou reparo",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias ou bens remetidos para conserto ou reparo."
    },
    {
        "id": "1917",
        "idPai": "1900",
        "idLink": "1917-entrada-de-mercadoria-recebida-em-consignacao-mercantil-ou-industrial",
        "titulo": "1917 - Entrada de mercadoria recebida em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas a título de consignação mercantil ou industrial."
    },
    {
        "id": "1918",
        "idPai": "1900",
        "idLink": "1918-devolucao-de-mercadoria-remetida-em-consignacao-mercantil-ou-industrial",
        "titulo": "1918 - Devolução de mercadoria remetida em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as entradas por devolução de mercadorias remetidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "1919",
        "idPai": "1900",
        "idLink": "1919-devolucao-simbolica-de-mercadoria-vendida-ou-utilizada-em-processo-industrial-remetida-anteriormente-em-consignacao-mercantil-ou-industrial",
        "titulo": "1919 - Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as entradas por devolução simbólica de mercadorias vendidas ou utilizadas em processo industrial, remetidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "1920",
        "idPai": "1900",
        "idLink": "1920-entrada-de-vasilhame-ou-sacaria",
        "titulo": "1920 - Entrada de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as entradas de vasilhame ou sacaria."
    },
    {
        "id": "1921",
        "idPai": "1900",
        "idLink": "1921-retorno-de-vasilhame-ou-sacaria",
        "titulo": "1921 - Retorno de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as entradas em retorno de vasilhame ou sacaria."
    },
    {
        "id": "1922",
        "idPai": "1900",
        "idLink": "1922-lancamento-efetuado-a-titulo-de-simples-faturamento-decorrente-de-compra-para-recebimento-futuro",
        "titulo": "1922 - Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro",
        "descricao": "Classificam-se neste código os registros efetuados a título de simples faturamento decorrente de compra para recebimento futuro."
    },
    {
        "id": "1923",
        "idPai": "1900",
        "idLink": "1923-entrada-de-mercadoria-recebida-do-vendedor-remetente-em-venda-a-ordem",
        "titulo": "1923 - Entrada de mercadoria recebida do vendedor remetente, em venda à ordem",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas do vendedor remetente, em vendas à ordem, cuja compra do adquirente originário, foi classificada nos códigos \"1.120 – Compra para industrialização, em venda à ordem, já recebida do vendedor remetente\" ou \"1.121 – Compra para comercialização, em venda à ordem, já recebida do vendedor remetente\"."
    },
    {
        "id": "1924",
        "idPai": "1900",
        "idLink": "1924-entrada-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-esta-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "1924 - Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as entradas de insumos recebidos para serem industrializados por conta e ordem do adquirente, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente dos mesmos."
    },
    {
        "id": "1925",
        "idPai": "1900",
        "idLink": "1925-retorno-de-mercadoria-remetida-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-esta-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "1925 - Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código o retorno dos insumos remetidos por conta e ordem do adquirente, para industrialização e incorporados ao produto final pelo estabelecimento industrializador, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "1926",
        "idPai": "1900",
        "idLink": "1926-lancamento-efetuado-a-titulo-de-reclassificacao-de-mercadoria-decorrente-de-formacao-de-kit-ou-de-sua-desagregacao",
        "titulo": "1926 - Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação",
        "descricao": "Classificam-se neste código os registros efetuados a título de reclassificação decorrente de formação de kit de mercadorias ou de sua desagregação."
    },
    {
        "id": "1931",
        "idPai": "1900",
        "idLink": "1931-lancamento-efetuado-pelo-tomador-do-servico-de-transporte-quando-a-responsabilidade-de-retencao-do-imposto-for-atribuida-ao-remetente-ou-alienante-da-mercadoria-pelo-servico-de-transporte-realizado-por-transportador-autonomo-ou-por-transportador-nao-inscrito-na-unidade-da-federacao-onde-iniciado-o-servico",
        "titulo": "1931 - Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço",
        "descricao": "Classificam-se neste código exclusivamente os lançamentos efetuados pelo tomador do serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação, onde iniciado o serviço, quando a responsabilidade pela retenção do imposto for atribuída ao remetente ou alienante da mercadoria."
    },
    {
        "id": "1932",
        "idPai": "1900",
        "idLink": "1932-aquisicao-de-servico-de-transporte-iniciado-em-unidade-da-federacao-diversa-daquela-onde-inscrito-o-prestador",
        "titulo": "1932 - Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador.",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte que tenham sido iniciados em unidade da Federação diversa daquela onde o prestador está inscrito como contribuinte."
    },
    {
        "id": "1933",
        "idPai": "1900",
        "idLink": "1933-aquisicao-de-servico-tributado-pelo-issqn",
        "titulo": "1933 - Aquisição de serviço tributado pelo ISSQN.",
        "descricao": "Classificam-se neste código as aquisições de serviços, de competência municipal, desde que informados em documentos autorizados pelo Estado."
    },
    {
        "id": "1949",
        "idPai": "1900",
        "idLink": "1949-outra-entrada-de-mercadoria-ou-prestacao-de-servico-nao-especificada",
        "titulo": "1949 - Outra entrada de mercadoria ou prestação de serviço não especificada",
        "descricao": "Classificam-se neste código as outras entradas de mercadorias ou prestações de serviços que não tenham sido especificadas nos códigos anteriores."
    },
    {
        "id": "2000",
        "idPai": 0,
        "idLink": "2000-entradas-ou-aquisicoes-de-servicos-de-outros-estados",
        "titulo": "2000 - Entradas ou aquisições de serviços de outros Estados",
        "descricao": "Classificam-se, neste grupo, as operações ou prestações em que o estabelecimento remetente esteja localizado em unidade da Federação diversa daquela do destinatário."
    },
    {
        "id": "2100",
        "idPai": "2000",
        "idLink": "2100-compras-para-industrializacao-comercializacao-ou-prestacao-de-servicos",
        "titulo": "2100 - Compras para industrialização, comercialização ou prestação de serviços"
    },
    {
        "id": "2150",
        "idPai": "2000",
        "idLink": "2150-transferencias-para-industrializacao-comercializacao-ou-prestacao-de-servicos",
        "titulo": "2150 - Transferências para industrialização, comercialização ou prestação de serviços"
    },
    {
        "id": "2200",
        "idPai": "2000",
        "idLink": "2200-devolucoes-de-vendas-de-producao-propria-de-terceiros-ou-anulacoes-de-valores",
        "titulo": "2200 - Devoluções de vendas de produção própria, de terceiros ou anulações de valores"
    },
    {
        "id": "2250",
        "idPai": "2000",
        "idLink": "2250-compras-de-energia-eletrica",
        "titulo": "2250 - Compras de energia elétrica"
    },
    {
        "id": "2300",
        "idPai": "2000",
        "idLink": "2300-aquisicoes-de-servicos-de-comunicacao",
        "titulo": "2300 - Aquisições de serviços de comunicação"
    },
    {
        "id": "2350",
        "idPai": "2000",
        "idLink": "2350-aquisicoes-de-servicos-de-transporte",
        "titulo": "2350 - Aquisições de serviços de transporte"
    },
    {
        "id": "2400",
        "idPai": "2000",
        "idLink": "2400-entradas-de-mercadorias-sujeitas-ao-regime-de-substituicao-tributaria",
        "titulo": "2400 - Entradas de mercadorias sujeitas ao regime de substituição tributária "
    },
    {
        "id": "2500",
        "idPai": "2000",
        "idLink": "2500-entradas-de-mercadorias-remetidas-com-fim-especifico-de-exportacao-e-eventuais-devolucoes",
        "titulo": "2500 - Entradas de mercadorias remetidas com fim específico de exportação e eventuais devoluções "
    },
    {
        "id": "2550",
        "idPai": "2000",
        "idLink": "2550-operacoes-com-bens-de-ativo-imobilizado-e-materiais-para-uso-ou-consumo",
        "titulo": "2550 - Operações com bens de ativo imobilizado e materiais para uso ou consumo"
    },
    {
        "id": "2600",
        "idPai": "2000",
        "idLink": "2600-creditos-e-ressarcimentos-de-icms",
        "titulo": "2600 - Créditos e ressarcimentos de ICMS"
    },
    {
        "id": "2650",
        "idPai": "2000",
        "idLink": "2650-entradas-de-combustiveis-derivados-ou-nao-de-petroleo-e-lubrificantes",
        "titulo": "2650 - Entradas de combustíveis, derivados ou não de petróleo e lubrificantes"
    },
    {
        "id": "2900",
        "idPai": "2000",
        "idLink": "2900-outras-entradas-de-mercadorias-ou-aquisicoes-de-servicos",
        "titulo": "2900 - Outras entradas de mercadorias ou aquisições de serviços"
    },
    {
        "id": "2101",
        "idPai": "2100",
        "idLink": "2101-compra-para-industrializacao",
        "titulo": "2101 - Compra para industrialização",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização. Também serão classificadas neste código as entradas de mercadorias em estabelecimento industrial de cooperativa recebidas de seus cooperados ou de estabelecimento de outra cooperativa."
    },
    {
        "id": "2102",
        "idPai": "2100",
        "idLink": "2102-compra-para-comercializacao",
        "titulo": "2102 - Compra para comercialização",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas. Também serão classificadas neste código as entradas de mercadorias em estabelecimento comercial de cooperativa recebidas de seus cooperados ou de estabelecimento de outra cooperativa."
    },
    {
        "id": "2111",
        "idPai": "2100",
        "idLink": "2111-compra-para-industrializacao-de-mercadoria-recebida-anteriormente-em-consignacao-industrial",
        "titulo": "2111 - Compra para industrialização de mercadoria recebida anteriormente em consignação industrial",
        "descricao": "Classificam-se neste código as compras efetivas de mercadorias a serem utilizadas em processo de industrialização, recebidas anteriormente a título de consignação industrial."
    },
    {
        "id": "2113",
        "idPai": "2100",
        "idLink": "2113-compra-para-comercializacao-de-mercadoria-recebida-anteriormente-em-consignacao-mercantil",
        "titulo": "2113 - Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as compras efetivas de mercadorias recebidas anteriormente a título de consignação mercantil."
    },
    {
        "id": "2116",
        "idPai": "2100",
        "idLink": "2116-compra-para-industrializacao-originada-de-encomenda-para-recebimento-futuro",
        "titulo": "2116 - Compra para industrialização originada de encomenda para recebimento futuro",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, quando da entrada real da mercadoria, cuja aquisição tenha sido classificada no código \"2.922 – Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\"."
    },
    {
        "id": "2117",
        "idPai": "2100",
        "idLink": "2117-compra-para-comercializacao-originada-de-encomenda-para-recebimento-futuro",
        "titulo": "2117 - Compra para comercialização originada de encomenda para recebimento futuro",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas, quando da entrada real da mercadoria, cuja aquisição tenha sido classificada no código \"2.922 – Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\"."
    },
    {
        "id": "2118",
        "idPai": "2100",
        "idLink": "2118-compra-de-mercadoria-para-comercializacao-pelo-adquirente-originario-entregue-pelo-vendedor-remetente-ao-destinatario-em-venda-a-ordem",
        "titulo": "2118 - Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem",
        "descricao": "Classificam-se neste código as compras de mercadorias já comercializadas, que, sem transitar pelo estabelecimento do adquirente originário, sejam entregues pelo vendedor remetente diretamente ao destinatário, em operação de venda à ordem, cuja venda seja classificada, pelo adquirente originário, no código \"6.120 – Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem\"."
    },
    {
        "id": "2120",
        "idPai": "2100",
        "idLink": "2120-compra-para-industrializacao-em-venda-a-ordem-ja-recebida-do-vendedor-remetente",
        "titulo": "2120 - Compra para industrialização, em venda à ordem, já recebida do vendedor remetente",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, em vendas à ordem, já recebidas do vendedor remetente, por ordem do adquirente originário."
    },
    {
        "id": "2121",
        "idPai": "2100",
        "idLink": "2121-compra-para-comercializacao-em-venda-a-ordem-ja-recebida-do-vendedor-remetente",
        "titulo": "2121 - Compra para comercialização, em venda à ordem, já recebida do vendedor remetente",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas, em vendas à ordem, já recebidas do vendedor remetente por ordem do adquirente originário."
    },
    {
        "id": "2122",
        "idPai": "2100",
        "idLink": "2122-compra-para-industrializacao-em-que-a-mercadoria-foi-remetida-pelo-fornecedor-ao-industrializador-sem-transitar-pelo-estabelecimento-adquirente",
        "titulo": "2122 - Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, remetidas pelo fornecedor para o industrializador sem que a mercadoria tenha transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "2124",
        "idPai": "2100",
        "idLink": "2124-industrializacao-efetuada-por-outra-empresa",
        "titulo": "2124 - Industrialização efetuada por outra empresa",
        "descricao": "Classificam-se neste código as entradas de mercadorias industrializadas por terceiros, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial. Quando a industrialização efetuada se referir a bens do ativo imobilizado ou de mercadorias para uso ou consumo do estabelecimento encomendante, a entrada deverá ser classificada nos códigos \"2.551 – Compra de bem para o ativo imobilizado\" ou \"2.556 – Compra de material para uso ou consumo\"."
    },
    {
        "id": "2125",
        "idPai": "2100",
        "idLink": "2125-industrializacao-efetuada-por-outra-empresa-quando-a-mercadoria-remetida-para-utilizacao-no-processo-de-industrializacao-nao-transitou-pelo-estabelecimento-adquirente-da-mercadoria",
        "titulo": "2125 - Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria",
        "descricao": "Classificam-se neste código as entradas de mercadorias industrializadas por outras empresas, em que as mercadorias remetidas para utilização no processo de industrialização não transitaram pelo estabelecimento do adquirente das mercadorias, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial. Quando a industrialização efetuada se referir a bens do ativo imobilizado ou de mercadorias para uso ou consumo do estabelecimento encomendante, a entrada deverá ser classificada nos códigos \"2.551 – Compra de bem para o ativo imobilizado\" ou \"2.556 – Compra de material para uso ou consumo\"."
    },
    {
        "id": "2126",
        "idPai": "2100",
        "idLink": "2126-compra-para-utilizacao-na-prestacao-de-servico",
        "titulo": "2126 - Compra para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as entradas de mercadorias a serem utilizadas nas prestações de serviços."
    },
    {
        "id": "2151",
        "idPai": "2150",
        "idLink": "2151-transferencia-para-industrializacao",
        "titulo": "2151 - Transferência para industrialização",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas em transferência de outro"
    },
    {
        "id": "2152",
        "idPai": "2150",
        "idLink": "2152-transferencia-para-comercializacao",
        "titulo": "2152 - Transferência para comercialização",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem comercializadas."
    },
    {
        "id": "2153",
        "idPai": "2150",
        "idLink": "2153-transferencia-de-energia-eletrica-para-distribuicao",
        "titulo": "2153 - Transferência de energia elétrica para distribuição",
        "descricao": "Classificam-se neste código as entradas de energia elétrica recebida em transferência de outro estabelecimento da mesma empresa, para distribuição."
    },
    {
        "id": "2154",
        "idPai": "2150",
        "idLink": "2154-transferencia-para-utilizacao-na-prestacao-de-servico",
        "titulo": "2154 - Transferência para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem utilizadas nas prestações de serviços."
    },
    {
        "id": "2201",
        "idPai": "2200",
        "idLink": "2201-devolucao-de-venda-de-producao-do-estabelecimento",
        "titulo": "2201 - Devolução de venda de produção do estabelecimento",
        "descricao": "Classificam-se neste código as devoluções de vendas de produtos industrializados pelo estabelecimento, cujas saídas tenham sido classificadas como “Venda de produção do estabelecimento”."
    },
    {
        "id": "2202",
        "idPai": "2200",
        "idLink": "2202-devolucao-de-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "2202 - Devolução de venda de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as devoluções de vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de industrialização no estabelecimento, cujas saídas tenham sido classificadas como \"Venda de mercadoria adquirida ou recebida de terceiros\"."
    },
    {
        "id": "2203",
        "idPai": "2200",
        "idLink": "2203-devolucao-de-venda-de-producao-do-estabelecimento-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "2203 - Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as devoluções de vendas de produtos industrializados pelo estabelecimento, cujas saídas foram classificadas no código “6.109 - Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio”."
    },
    {
        "id": "2204",
        "idPai": "2200",
        "idLink": "2204-devolucao-de-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "2204 - Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as devoluções de vendas de mercadorias adquiridas ou recebidas de terceiros, cujas saídas foram classificadas no código \"6.110 - Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"."
    },
    {
        "id": "2205",
        "idPai": "2200",
        "idLink": "2205-anulacao-de-valor-relativo-a-prestacao-de-servico-de-comunicacao",
        "titulo": "2205 - Anulação de valor relativo à prestação de serviço de comunicação",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de prestações de serviços de comunicação."
    },
    {
        "id": "2206",
        "idPai": "2200",
        "idLink": "2206-anulacao-de-valor-relativo-a-prestacao-de-servico-de-transporte",
        "titulo": "2206 - Anulação de valor relativo à prestação de serviço de transporte",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de prestações de serviços de transporte."
    },
    {
        "id": "2207",
        "idPai": "2200",
        "idLink": "2207-anulacao-de-valor-relativo-a-venda-de-energia-eletrica",
        "titulo": "2207 - Anulação de valor relativo à venda de energia elétrica",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de venda de energia elétrica."
    },
    {
        "id": "2208",
        "idPai": "2200",
        "idLink": "2208-devolucao-de-producao-do-estabelecimento-remetida-em-transferencia",
        "titulo": "2208 - Devolução de produção do estabelecimento, remetida em transferência",
        "descricao": "Classificam-se neste código as devoluções de produtos industrializados pelo estabelecimento, transferidos para outros estabelecimentos da mesma empresa."
    },
    {
        "id": "2209",
        "idPai": "2200",
        "idLink": "2209-devolucao-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-em-transferencia",
        "titulo": "2209 - Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas ou recebidas de terceiros, transferidas para outros estabelecimentos da mesma empresa."
    },
    {
        "id": "2251",
        "idPai": "2250",
        "idLink": "2251-compra-de-energia-eletrica-para-distribuicao-ou-comercializacao",
        "titulo": "2251 - Compra de energia elétrica para distribuição ou comercialização",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada em sistema de distribuição ou comercialização. Também serão classificadas neste código as compras de energia elétrica por cooperativas para distribuição aos seus cooperados."
    },
    {
        "id": "2252",
        "idPai": "2250",
        "idLink": "2252-compra-de-energia-eletrica-por-estabelecimento-industrial",
        "titulo": "2252 - Compra de energia elétrica por estabelecimento industrial",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada no processo de industrialização. Também serão classificadas neste código as compras de energia elétrica utilizada por estabelecimento industrial de cooperativa."
    },
    {
        "id": "2253",
        "idPai": "2250",
        "idLink": "2253-compra-de-energia-eletrica-por-estabelecimento-comercial",
        "titulo": "2253 - Compra de energia elétrica por estabelecimento comercial",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento comercial. Também serão classificadas neste código as compras de energia elétrica utilizada por estabelecimento comercial de cooperativa."
    },
    {
        "id": "2254",
        "idPai": "2250",
        "idLink": "2254-compra-de-energia-eletrica-por-estabelecimento-prestador-de-servico-de-transporte",
        "titulo": "2254 - Compra de energia elétrica por estabelecimento prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento prestador de serviços de transporte."
    },
    {
        "id": "2255",
        "idPai": "2250",
        "idLink": "2255-compra-de-energia-eletrica-por-estabelecimento-prestador-de-servico-de-comunicacao",
        "titulo": "2255 - Compra de energia elétrica por estabelecimento prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento prestador de serviços de comunicação."
    },
    {
        "id": "2256",
        "idPai": "2250",
        "idLink": "2256-compra-de-energia-eletrica-por-estabelecimento-de-produtor-rural",
        "titulo": "2256 - Compra de energia elétrica por estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada por estabelecimento de produtor rural."
    },
    {
        "id": "2257",
        "idPai": "2250",
        "idLink": "2257-compra-de-energia-eletrica-para-consumo-por-demanda-contratada",
        "titulo": "2257 - Compra de energia elétrica para consumo por demanda contratada",
        "descricao": "Classificam-se neste código as compras de energia elétrica para consumo por demanda contratada, que prevalecerá sobre os demais códigos deste subgrupo."
    },
    {
        "id": "2301",
        "idPai": "2300",
        "idLink": "2301-aquisicao-de-servico-de-comunicacao-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "2301 - Aquisição de serviço de comunicação para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados nas prestações de serviços da mesma natureza."
    },
    {
        "id": "2302",
        "idPai": "2300",
        "idLink": "2302-aquisicao-de-servico-de-comunicacao-por-estabelecimento-industrial",
        "titulo": "2302 - Aquisição de serviço de comunicação por estabelecimento industrial",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento industrial. Também serão classificadas neste código as aquisições de serviços de comunicação utilizados por estabelecimento industrial de cooperativa."
    },
    {
        "id": "2303",
        "idPai": "2300",
        "idLink": "2303-aquisicao-de-servico-de-comunicacao-por-estabelecimento-comercial",
        "titulo": "2303 - Aquisição de serviço de comunicação por estabelecimento comercial",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento comercial. Também serão classificadas neste código as aquisições de serviços de comunicação utilizados por estabelecimento comercial de cooperativa."
    },
    {
        "id": "2304",
        "idPai": "2300",
        "idLink": "2304-aquisicao-de-servico-de-comunicacao-por-estabelecimento-de-prestador-de-servico-de-transporte",
        "titulo": "2304 - Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizado por estabelecimento prestador de serviço de transporte."
    },
    {
        "id": "2305",
        "idPai": "2300",
        "idLink": "2305-aquisicao-de-servico-de-comunicacao-por-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "2305 - Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "2306",
        "idPai": "2300",
        "idLink": "2306-aquisicao-de-servico-de-comunicacao-por-estabelecimento-de-produtor-rural",
        "titulo": "2306 - Aquisição de serviço de comunicação por estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados por estabelecimento de produtor rural."
    },
    {
        "id": "2351",
        "idPai": "2350",
        "idLink": "2351-aquisicao-de-servico-de-transporte-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "2351 - Aquisição de serviço de transporte para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados nas prestações de serviços da mesma natureza."
    },
    {
        "id": "2352",
        "idPai": "2350",
        "idLink": "2352-aquisicao-de-servico-de-transporte-por-estabelecimento-industrial",
        "titulo": "2352 - Aquisição de serviço de transporte por estabelecimento industrial",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento industrial. Também serão classificadas neste código as aquisições de serviços de transporte utilizados por estabelecimento industrial de cooperativa."
    },
    {
        "id": "2353",
        "idPai": "2350",
        "idLink": "2353-aquisicao-de-servico-de-transporte-por-estabelecimento-comercial",
        "titulo": "2353 - Aquisição de serviço de transporte por estabelecimento comercial",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento comercial. Também serão classificadas neste código as aquisições de serviços de transporte utilizados por estabelecimento comercial de cooperativa."
    },
    {
        "id": "2354",
        "idPai": "2350",
        "idLink": "2354-aquisicao-de-servico-de-transporte-por-estabelecimento-de-prestador-de-servico-de-comunicacao",
        "titulo": "2354 - Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento prestador de serviços de comunicação."
    },
    {
        "id": "2355",
        "idPai": "2350",
        "idLink": "2355-aquisicao-de-servico-de-transporte-por-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "2355 - Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "2356",
        "idPai": "2350",
        "idLink": "2356-aquisicao-de-servico-de-transporte-por-estabelecimento-de-produtor-rural",
        "titulo": "2356 - Aquisição de serviço de transporte por estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento de produtor rural."
    },
    {
        "id": "2401",
        "idPai": "2400",
        "idLink": "2401-compra-para-industrializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2401 - Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização, decorrentes de operações com mercadorias sujeitas ao regime de substituição tributária. Também serão classificadas neste código as compras por estabelecimento industrial de cooperativa de mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "2403",
        "idPai": "2400",
        "idLink": "2403-compra-para-comercializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2403 - Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas, decorrentes de operações com mercadorias sujeitas ao regime de substituição tributária. Também serão classificadas neste código as compras de mercadorias sujeitas ao regime de substituição tributária em estabelecimento comercial de cooperativa."
    },
    {
        "id": "2406",
        "idPai": "2400",
        "idLink": "2406-compra-de-bem-para-o-ativo-imobilizado-cuja-mercadoria-esta-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2406 - Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de bens destinados ao ativo imobilizado do estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "2407",
        "idPai": "2400",
        "idLink": "2407-compra-de-mercadoria-para-uso-ou-consumo-cuja-mercadoria-esta-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2407 - Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as compras de mercadorias destinadas ao uso ou consumo do estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "2408",
        "idPai": "2400",
        "idLink": "2408-transferencia-para-industrializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2408 - Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem industrializadas no estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "2409",
        "idPai": "2400",
        "idLink": "2409-transferencia-para-comercializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2409 - Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem comercializadas, decorrentes de operações sujeitas ao regime de substituição tributária."
    },
    {
        "id": "2410",
        "idPai": "2400",
        "idLink": "2410-devolucao-de-venda-de-producao-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "2410 - Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de produtos industrializados e vendidos pelo estabelecimento, cujas saídas tenham sido classificadas como \"Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"."
    },
    {
        "id": "2411",
        "idPai": "2400",
        "idLink": "2411-devolucao-de-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2411 - Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de vendas de mercadorias adquiridas ou recebidas de terceiros, cujas saídas tenham sido classificadas como \"Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "2414",
        "idPai": "2400",
        "idLink": "2414-retorno-de-producao-do-estabelecimento-remetida-para-venda-fora-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "2414 - Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as entradas, em retorno, de produtos industrializados pelo estabelecimento, remetidos para vendas fora do estabelecimento, inclusive por meio de veículos, em operações com produtos sujeitos ao regime de substituição tributária, e não comercializadas."
    },
    {
        "id": "2415",
        "idPai": "2400",
        "idLink": "2415-retorno-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-para-venda-fora-do-estabelecimento-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "2415 - Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as entradas, em retorno, de mercadorias adquiridas ou recebidas de terceiros remetidas para vendas fora do estabelecimento, inclusive por meio de veículos, em operações com mercadorias sujeitas ao regime de substituição tributária, e não comercializadas."
    },
    {
        "id": "2501",
        "idPai": "2500",
        "idLink": "2501-entrada-de-mercadoria-recebida-com-fim-especifico-de-exportacao",
        "titulo": "2501 - Entrada de mercadoria recebida com fim específico de exportação",
        "descricao": "Classificam-se neste código as entradas de mercadorias em estabelecimento de trading company, empresa comercial exportadora ou outro estabelecimento do remetente, com fim específico de exportação."
    },
    {
        "id": "2503",
        "idPai": "2500",
        "idLink": "2503-entrada-decorrente-de-devolucao-de-produto-remetido-com-fim-especifico-de-exportacao-de-producao-do-estabelecimento",
        "titulo": "2503 - Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento",
        "descricao": "Classificam-se neste código as devoluções de produtos industrializados pelo estabelecimento, remetidos a trading company, a empresa comercial exportadora ou a outro estabelecimento do remetente, com fim específico de exportação, cujas saídas tenham sido classificadas no código \"6.501 – Remessa de produção do estabelecimento, com fim específico de exportação\"."
    },
    {
        "id": "2504",
        "idPai": "2500",
        "idLink": "2504-entrada-decorrente-de-devolucao-de-mercadoria-remetida-com-fim-especifico-de-exportacao-adquirida-ou-recebida-de-terceiros",
        "titulo": "2504 - Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas ou recebidas de terceiros remetidas a trading company, a empresa comercial exportadora ou a outro estabelecimento do remetente, com fim específico de exportação, cujas saídas tenham sido classificadas no código \"6.502 – Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação\"."
    },
    {
        "id": "2505",
        "idPai": "2500",
        "idLink": "2505-entrada-decorrente-de-devolucao-simbolica-de-mercadorias-remetidas-para-formacao-de-lote-de-exportacao-de-produtos-industrializados-ou-produzidos-pelo-proprio-estabelecimento",
        "titulo": "2505 - Entrada decorrente de devolução simbólica de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
        "descricao": "Classificam-se neste código as devoluções simbólicas de mercadorias remetidas para formação de lote de exportação, cujas saídas tenham sido classificadas no código \"5.504 - Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento\"."
    },
    {
        "id": "2506",
        "idPai": "2500",
        "idLink": "2506-entrada-decorrente-de-devolucao-simbolica-de-mercadorias-adquiridas-ou-recebidas-de-terceiros-remetidas-para-formacao-de-lote-de-exportacao",
        "titulo": "2506 - Entrada decorrente de devolução simbólica de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação.",
        "descricao": "Classificam-se neste código as devoluções simbólicas de mercadorias remetidas para formação de lote de exportação em armazéns alfandegados, entrepostos aduaneiros ou outros estabelecimentos que venham a ser regulamentados pela legislação tributária de cada Unidade Federada, efetuadas pelo estabelecimento depositário, cujas saídas tenham sido classificadas no código \"5.505 Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação\"."
    },
    {
        "id": "2551",
        "idPai": "2550",
        "idLink": "2551-compra-de-bem-para-o-ativo-imobilizado",
        "titulo": "2551 - Compra de bem para o ativo imobilizado",
        "descricao": "Classificam-se neste código as compras de bens destinados ao ativo imobilizado do estabelecimento."
    },
    {
        "id": "2552",
        "idPai": "2550",
        "idLink": "2552-transferencia-de-bem-do-ativo-imobilizado",
        "titulo": "2552 - Transferência de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as entradas de bens destinados ao ativo imobilizado recebidos em transferência de outro estabelecimento da mesma empresa."
    },
    {
        "id": "2553",
        "idPai": "2550",
        "idLink": "2553-devolucao-de-venda-de-bem-do-ativo-imobilizado",
        "titulo": "2553 - Devolução de venda de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as devoluções de vendas de bens do ativo imobilizado, cujas saídas tenham sido classificadas no código “6.551 - Venda de bem do ativo imobilizado”."
    },
    {
        "id": "2554",
        "idPai": "2550",
        "idLink": "2554-retorno-de-bem-do-ativo-imobilizado-remetido-para-uso-fora-do-estabelecimento",
        "titulo": "2554 - Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento",
        "descricao": "Classificam-se neste código as entradas por retorno de bens do ativo imobilizado remetidos para uso fora do estabelecimento, cujas saídas tenham sido classificadas no código “6.554 - Remessa de bem do ativo imobilizado para uso fora do estabelecimento”."
    },
    {
        "id": "2555",
        "idPai": "2550",
        "idLink": "2555-entrada-de-bem-do-ativo-imobilizado-de-terceiro-remetido-para-uso-no-estabelecimento",
        "titulo": "2555 - Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento",
        "descricao": "Classificam-se neste código as entradas de bens do ativo imobilizado de terceiros, remetidos para uso no estabelecimento."
    },
    {
        "id": "2556",
        "idPai": "2550",
        "idLink": "2556-compra-de-material-para-uso-ou-consumo",
        "titulo": "2556 - Compra de material para uso ou consumo",
        "descricao": "Classificam-se neste código as compras de mercadorias destinadas ao uso ou consumo do estabelecimento."
    },
    {
        "id": "2557",
        "idPai": "2550",
        "idLink": "2557-transferencia-de-material-para-uso-ou-consumo",
        "titulo": "2557 - Transferência de material para uso ou consumo",
        "descricao": "Classificam-se neste código as entradas de materiais para uso ou consumo recebidos em transferência de outro estabelecimento da mesma empresa."
    },
    {
        "id": "2603",
        "idPai": "2600",
        "idLink": "2603-ressarcimento-de-icms-retido-por-substituicao-tributaria",
        "titulo": "2603 - Ressarcimento de ICMS retido por substituição tributária",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro de ressarcimento de ICMS retido por substituição tributária a contribuinte substituído, efetuado pelo contribuinte substituto, nas hipóteses previstas na legislação aplicável."
    },
    {
        "id": "2651",
        "idPai": "2650",
        "idLink": "2651-compra-de-combustivel-ou-lubrificante-para-industrializacao-subsequeente",
        "titulo": "2651 - Compra de combustível ou lubrificante para industrialização subseqüente",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem utilizados em processo de industrialização do próprio produto."
    },
    {
        "id": "2652",
        "idPai": "2650",
        "idLink": "2652-compra-de-combustivel-ou-lubrificante-para-comercializacao",
        "titulo": "2652 - Compra de combustível ou lubrificante para comercialização",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem comercializados."
    },
    {
        "id": "2653",
        "idPai": "2650",
        "idLink": "2653-compra-de-combustivel-ou-lubrificante-por-consumidor-ou-usuario-final",
        "titulo": "2653 - Compra de combustível ou lubrificante por consumidor ou usuário final",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem consumidos em processo de industrialização de outros produtos, na prestação de serviços ou por usuário final."
    },
    {
        "id": "2658",
        "idPai": "2650",
        "idLink": "2658-transferencia-de-combustivel-e-lubrificante-para-industrializacao",
        "titulo": "2658 - Transferência de combustível e lubrificante para industrialização",
        "descricao": "Classificam-se neste código as entradas de combustíveis e lubrificantes recebidas em transferência de outro estabelecimento da mesma empresa para serem utilizados em processo de industrialização do próprio produto."
    },
    {
        "id": "2659",
        "idPai": "2650",
        "idLink": "2659-transferencia-de-combustivel-e-lubrificante-para-comercializacao",
        "titulo": "2659 - Transferência de combustível e lubrificante para comercialização",
        "descricao": "Classificam-se neste código as entradas de combustíveis e lubrificantes recebidas em transferência de outro estabelecimento da mesma empresa para serem comercializados."
    },
    {
        "id": "2660",
        "idPai": "2650",
        "idLink": "2660-devolucao-de-venda-de-combustivel-ou-lubrificante-destinado-a-industrializacao-subsequeente",
        "titulo": "2660 - Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente",
        "descricao": "Classificam-se neste código as devoluções de vendas de combustíveis ou lubrificantes, cujas saídas tenham sido classificadas como  “Venda de combustível ou lubrificante destinado à industrialização subseqüente”."
    },
    {
        "id": "2661",
        "idPai": "2650",
        "idLink": "2661-devolucao-de-venda-de-combustivel-ou-lubrificante-destinado-a-comercializacao",
        "titulo": "2661 - Devolução de venda de combustível ou lubrificante destinado à comercialização",
        "descricao": "Classificam-se neste código as devoluções de vendas de combustíveis ou lubrificantes, cujas saídas tenham sido classificadas como “Venda de combustíveis ou lubrificantes para comercialização”."
    },
    {
        "id": "2662",
        "idPai": "2650",
        "idLink": "2662-devolucao-de-venda-de-combustivel-ou-lubrificante-destinado-a-consumidor-ou-usuario-final",
        "titulo": "2662 - Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final",
        "descricao": "Classificam-se neste código as devoluções de vendas de combustíveis ou lubrificantes, cujas saídas tenham sido classificadas como “Venda de combustíveis ou lubrificantes por consumidor ou usuário final”."
    },
    {
        "id": "2663",
        "idPai": "2650",
        "idLink": "2663-entrada-de-combustivel-ou-lubrificante-para-armazenagem",
        "titulo": "2663 - Entrada de combustível ou lubrificante para armazenagem",
        "descricao": "Classificam-se neste código as entradas de combustíveis ou lubrificantes para armazenagem."
    },
    {
        "id": "2664",
        "idPai": "2650",
        "idLink": "2664-retorno-de-combustivel-ou-lubrificante-remetido-para-armazenagem",
        "titulo": "2664 - Retorno de combustível ou lubrificante remetido para armazenagem",
        "descricao": "Classificam-se neste código as entradas, ainda que simbólicas, por retorno de combustíveis ou lubrificantes, remetidos para armazenagem."
    },
    {
        "id": "2901",
        "idPai": "2900",
        "idLink": "2901-entrada-para-industrializacao-por-encomenda",
        "titulo": "2901 - Entrada para industrialização por encomenda",
        "descricao": "Classificam-se neste código as entradas de insumos recebidos para industrialização por encomenda de outra empresa ou de outro estabelecimento da mesma empresa."
    },
    {
        "id": "2902",
        "idPai": "2900",
        "idLink": "2902-retorno-de-mercadoria-remetida-para-industrializacao-por-encomenda",
        "titulo": "2902 - Retorno de mercadoria remetida para industrialização por encomenda",
        "descricao": "Classificam-se neste código o retorno dos insumos remetidos para industrialização por encomenda, incorporados ao produto final pelo estabelecimento industrializador."
    },
    {
        "id": "2903",
        "idPai": "2900",
        "idLink": "2903-entrada-de-mercadoria-remetida-para-industrializacao-e-nao-aplicada-no-referido-processo",
        "titulo": "2903 - Entrada de mercadoria remetida para industrialização e não aplicada no referido processo",
        "descricao": "Classificam-se neste código as entradas em devolução de insumos remetidos para industrialização e não aplicados no referido processo."
    },
    {
        "id": "2904",
        "idPai": "2900",
        "idLink": "2904-retorno-de-remessa-para-venda-fora-do-estabelecimento",
        "titulo": "2904 - Retorno de remessa para venda fora do estabelecimento",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias remetidas para venda fora do estabelecimento, inclusive por meio de veículos, e não comercializadas."
    },
    {
        "id": "2905",
        "idPai": "2900",
        "idLink": "2905-entrada-de-mercadoria-recebida-para-deposito-em-deposito-fechado-ou-armazem-geral",
        "titulo": "2905 - Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas para depósito em depósito fechado ou armazém geral."
    },
    {
        "id": "2906",
        "idPai": "2900",
        "idLink": "2906-retorno-de-mercadoria-remetida-para-deposito-fechado-ou-armazem-geral",
        "titulo": "2906 - Retorno de mercadoria remetida para depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias remetidas para depósito em depósito fechado ou armazém geral."
    },
    {
        "id": "2907",
        "idPai": "2900",
        "idLink": "2907-retorno-simbolico-de-mercadoria-remetida-para-deposito-fechado-ou-armazem-geral",
        "titulo": "2907 - Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as entradas em retorno simbólico de mercadorias remetidas para depósito em depósito fechado ou armazém geral, quando as mercadorias depositadas tenham sido objeto de saída a qualquer título e que não tenham retornado ao estabelecimento depositante."
    },
    {
        "id": "2908",
        "idPai": "2900",
        "idLink": "2908-entrada-de-bem-por-conta-de-contrato-de-comodato",
        "titulo": "2908 - Entrada de bem por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as entradas de bens recebidos em cumprimento de contrato de comodato."
    },
    {
        "id": "2909",
        "idPai": "2900",
        "idLink": "2909-retorno-de-bem-remetido-por-conta-de-contrato-de-comodato",
        "titulo": "2909 - Retorno de bem remetido por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as entradas de bens recebidos em devolução após cumprido o contrato de comodato."
    },
    {
        "id": "2910",
        "idPai": "2900",
        "idLink": "2910-entrada-de-bonificacao-doacao-ou-brinde",
        "titulo": "2910 - Entrada de bonificação, doação ou brinde",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas a título de bonificação, doação ou brinde."
    },
    {
        "id": "2911",
        "idPai": "2900",
        "idLink": "2911-entrada-de-amostra-gratis",
        "titulo": "2911 - Entrada de amostra grátis",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas a título de amostra grátis."
    },
    {
        "id": "2912",
        "idPai": "2900",
        "idLink": "2912-entrada-de-mercadoria-ou-bem-recebido-para-demonstracao",
        "titulo": "2912 - Entrada de mercadoria ou bem recebido para demonstração",
        "descricao": "Classificam-se neste código as entradas de mercadorias ou bens recebidos para demonstração."
    },
    {
        "id": "2913",
        "idPai": "2900",
        "idLink": "2913-retorno-de-mercadoria-ou-bem-remetido-para-demonstracao",
        "titulo": "2913 - Retorno de mercadoria ou bem remetido para demonstração",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias ou bens remetidos para demonstração."
    },
    {
        "id": "2914",
        "idPai": "2900",
        "idLink": "2914-retorno-de-mercadoria-ou-bem-remetido-para-exposicao-ou-feira",
        "titulo": "2914 - Retorno de mercadoria ou bem remetido para exposição ou feira",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias ou bens remetidos para exposição ou feira."
    },
    {
        "id": "2915",
        "idPai": "2900",
        "idLink": "2915-entrada-de-mercadoria-ou-bem-recebido-para-conserto-ou-reparo",
        "titulo": "2915 - Entrada de mercadoria ou bem recebido para conserto ou reparo",
        "descricao": "Classificam-se neste código as entradas de mercadorias ou bens recebidos para conserto ou reparo."
    },
    {
        "id": "2916",
        "idPai": "2900",
        "idLink": "2916-retorno-de-mercadoria-ou-bem-remetido-para-conserto-ou-reparo",
        "titulo": "2916 - Retorno de mercadoria ou bem remetido para conserto ou reparo",
        "descricao": "Classificam-se neste código as entradas em retorno de mercadorias ou bens remetidos para conserto ou reparo."
    },
    {
        "id": "2917",
        "idPai": "2900",
        "idLink": "2917-entrada-de-mercadoria-recebida-em-consignacao-mercantil-ou-industrial",
        "titulo": "2917 - Entrada de mercadoria recebida em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas a título de consignação mercantil ou industrial."
    },
    {
        "id": "2918",
        "idPai": "2900",
        "idLink": "2918-devolucao-de-mercadoria-remetida-em-consignacao-mercantil-ou-industrial",
        "titulo": "2918 - Devolução de mercadoria remetida em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as entradas por devolução de mercadorias remetidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "2919",
        "idPai": "2900",
        "idLink": "2919-devolucao-simbolica-de-mercadoria-vendida-ou-utilizada-em-processo-industrial-remetida-anteriormente-em-consignacao-mercantil-ou-industrial",
        "titulo": "2919 - Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as entradas por devolução simbólica de mercadorias vendidas ou utilizadas em processo industrial, remetidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "2920",
        "idPai": "2900",
        "idLink": "2920-entrada-de-vasilhame-ou-sacaria",
        "titulo": "2920 - Entrada de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as entradas de vasilhame ou sacaria."
    },
    {
        "id": "2921",
        "idPai": "2900",
        "idLink": "2921-retorno-de-vasilhame-ou-sacaria",
        "titulo": "2921 - Retorno de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as entradas em retorno de vasilhame ou sacaria."
    },
    {
        "id": "2922",
        "idPai": "2900",
        "idLink": "2922-lancamento-efetuado-a-titulo-de-simples-faturamento-decorrente-de-compra-para-recebimento-futuro",
        "titulo": "2922 - Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro",
        "descricao": "Classificam-se neste código os registros efetuados a título de simples faturamento decorrente de compra para recebimento futuro."
    },
    {
        "id": "2923",
        "idPai": "2900",
        "idLink": "2923-entrada-de-mercadoria-recebida-do-vendedor-remetente-em-venda-a-ordem",
        "titulo": "2923 - Entrada de mercadoria recebida do vendedor remetente, em venda à ordem",
        "descricao": "Classificam-se neste código as entradas de mercadorias recebidas do vendedor remetente, em vendas à ordem, cuja compra do adquirente originário, foi classificada nos códigos \"2.120 – Compra para industrialização, em venda à ordem, já recebida do vendedor remetente\" ou \"2.121 – Compra para comercialização, em venda à ordem, já recebida do vendedor remetente\"."
    },
    {
        "id": "2924",
        "idPai": "2900",
        "idLink": "2924-entrada-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-esta-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "2924 - Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as entradas de insumos recebidos para serem industrializados por conta e ordem do adquirente, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente dos mesmos."
    },
    {
        "id": "2925",
        "idPai": "2900",
        "idLink": "2925-retorno-de-mercadoria-remetida-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-esta-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "2925 - Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código o retorno dos insumos remetidos por conta e ordem do adquirente, para industrialização e incorporados ao produto final pelo estabelecimento industrializador, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "2931",
        "idPai": "2900",
        "idLink": "2931-lancamento-efetuado-pelo-tomador-do-servico-de-transporte-quando-a-responsabilidade-de-retencao-do-imposto-for-atribuida-ao-remetente-ou-alienante-da-mercadoria-pelo-servico-de-transporte-realizado-por-transportador-autonomo-ou-por-transportador-nao-inscrito-na-unidade-da-federacao-onde-iniciado-o-servico",
        "titulo": "2931 - Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço",
        "descricao": "Classificam-se neste código exclusivamente os lançamentos efetuados pelo tomador do serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação, onde iniciado o serviço, quando a responsabilidade pela retenção do imposto for atribuída ao remetente ou alienante da mercadoria."
    },
    {
        "id": "2932",
        "idPai": "2900",
        "idLink": "2932-aquisicao-de-servico-de-transporte-iniciado-em-unidade-da-federacao-diversa-daquela-onde-inscrito-o-prestador",
        "titulo": "2932 - Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador.",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte que tenham sido iniciados em unidade da Federação diversa daquela onde o prestador está inscrito como contribuinte."
    },
    {
        "id": "2933",
        "idPai": "2900",
        "idLink": "2933-aquisicao-de-servico-tributado-pelo-issqn",
        "titulo": "2933 - Aquisição de serviço tributado pelo ISSQN.",
        "descricao": "Classificam-se neste código as aquisições de serviços, de competência municipal, desde que informados em documentos autorizados pelo Estado."
    },
    {
        "id": "2949",
        "idPai": "2900",
        "idLink": "2949-outra-entrada-de-mercadoria-ou-prestacao-de-servico-nao-especificado",
        "titulo": "2949 - Outra entrada de mercadoria ou prestação de serviço não especificado",
        "descricao": "Classificam-se neste código as outras entradas de mercadorias ou prestações de serviços que não tenham sido especificados nos códigos anteriores."
    },
    {
        "id": "3000",
        "idPai": 0,
        "idLink": "3000-entradas-ou-aquisicoes-de-servicos-do-exterior",
        "titulo": "3000 - Entradas ou aquisições de serviços do Exterior",
        "descricao": "Classificam-se, neste grupo, as entradas de mercadorias oriundas de outro país, inclusive as decorrentes de aquisição por arrematação, concorrência ou qualquer outra forma de alienação promovida pelo poder público, e os serviços iniciados no exterior."
    },
    {
        "id": "3100",
        "idPai": "3000",
        "idLink": "3100-compras-para-industrializacao-comercializacao-ou-prestacao-de-servicos",
        "titulo": "3100 - Compras para industrialização, comercialização ou prestação de serviços"
    },
    {
        "id": "3200",
        "idPai": "3000",
        "idLink": "3200-devolucoes-de-vendas-de-producao-propria-de-terceiros-ou-anulacoes-de-valores",
        "titulo": "3200 - Devoluções de vendas de produção própria, de terceiros ou anulações de valores"
    },
    {
        "id": "3250",
        "idPai": "3000",
        "idLink": "3250-compras-de-energia-eletrica",
        "titulo": "3250 - Compras de energia elétrica"
    },
    {
        "id": "3300",
        "idPai": "3000",
        "idLink": "3300-aquisicoes-de-servicos-de-comunicacao",
        "titulo": "3300 - Aquisições de serviços de comunicação"
    },
    {
        "id": "3350",
        "idPai": "3000",
        "idLink": "3350-aquisicoes-de-servicos-de-transporte",
        "titulo": "3350 - Aquisições de serviços de transporte"
    },
    {
        "id": "3500",
        "idPai": "3000",
        "idLink": "3500-entradas-de-mercadorias-remetidas-com-fim-especifico-de-exportacao-e-eventuais-devolucoes",
        "titulo": "3500 - Entradas de mercadorias remetidas com fim específico de exportação e eventuais devoluções "
    },
    {
        "id": "3550",
        "idPai": "3000",
        "idLink": "3550-operacoes-com-bens-de-ativo-imobilizado-e-materiais-para-uso-ou-consumo",
        "titulo": "3550 - Operações com bens de ativo imobilizado e materiais para uso ou consumo"
    },
    {
        "id": "3650",
        "idPai": "3000",
        "idLink": "3650-entradas-de-combustiveis-derivados-ou-nao-de-petroleo-e-lubrificantes",
        "titulo": "3650 - Entradas de combustíveis, derivados ou não de petróleo e lubrificantes"
    },
    {
        "id": "3900",
        "idPai": "3000",
        "idLink": "3900-outras-entradas-de-mercadorias-ou-aquisicoes-de-servicos",
        "titulo": "3900 - Outras entradas de mercadorias ou aquisições de serviços"
    },
    {
        "id": "3101",
        "idPai": "3100",
        "idLink": "3101-compra-para-industrializacao",
        "titulo": "3101 - Compra para industrialização",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização. Também serão classificadas neste código as entradas de mercadorias em estabelecimento industrial de cooperativa ."
    },
    {
        "id": "3102",
        "idPai": "3100",
        "idLink": "3102-compra-para-comercializacao",
        "titulo": "3102 - Compra para comercialização",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem comercializadas. Também serão classificadas neste código as entradas de mercadorias em estabelecimento comercial de cooperativa."
    },
    {
        "id": "3126",
        "idPai": "3100",
        "idLink": "3126-compra-para-utilizacao-na-prestacao-de-servico",
        "titulo": "3126 - Compra para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as entradas de mercadorias a serem utilizadas nas prestações de serviços."
    },
    {
        "id": "3127",
        "idPai": "3100",
        "idLink": "3127-compra-para-industrializacao-sob-o-regime-de-drawback",
        "titulo": "3127 - Compra para industrialização sob o regime de “drawback”",
        "descricao": "Classificam-se neste código as compras de mercadorias a serem utilizadas em processo de industrialização e posterior exportação do produto resultante, cujas vendas serão classificadas no código \"7.127 – Venda de produção do estabelecimento sob o regime de \"drawback\"\"."
    },
    {
        "id": "3201",
        "idPai": "3200",
        "idLink": "3201-devolucao-de-venda-de-producao-do-estabelecimento",
        "titulo": "3201 - Devolução de venda de produção do estabelecimento",
        "descricao": "Classificam-se neste código as devoluções de vendas de produtos industrializados pelo estabelecimento, cujas saídas tenham sido classificadas como “Venda de produção do estabelecimento”."
    },
    {
        "id": "3202",
        "idPai": "3200",
        "idLink": "3202-devolucao-de-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "3202 - Devolução de venda de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as devoluções de vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de industrialização no estabelecimento, cujas saídas tenham sido classificadas como \"Venda de mercadoria adquirida ou recebida de terceiros\"."
    },
    {
        "id": "3205",
        "idPai": "3200",
        "idLink": "3205-anulacao-de-valor-relativo-a-prestacao-de-servico-de-comunicacao",
        "titulo": "3205 - Anulação de valor relativo à prestação de serviço de comunicação",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de prestações de serviços de comunicação."
    },
    {
        "id": "3206",
        "idPai": "3200",
        "idLink": "3206-anulacao-de-valor-relativo-a-prestacao-de-servico-de-transporte",
        "titulo": "3206 - Anulação de valor relativo à prestação de serviço de transporte",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de prestações de serviços de transporte."
    },
    {
        "id": "3207",
        "idPai": "3200",
        "idLink": "3207-anulacao-de-valor-relativo-a-venda-de-energia-eletrica",
        "titulo": "3207 - Anulação de valor relativo à venda de energia elétrica",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes de venda de energia elétrica."
    },
    {
        "id": "3211",
        "idPai": "3200",
        "idLink": "3211-devolucao-de-venda-de-producao-do-estabelecimento-sob-o-regime-de-drawback",
        "titulo": "3211 - Devolução de venda de produção do estabelecimento sob o regime de “drawback”",
        "descricao": "Classificam-se neste código as devoluções de vendas de produtos industrializados pelo estabelecimento sob o regime de “drawback”."
    },
    {
        "id": "3251",
        "idPai": "3250",
        "idLink": "3251-compra-de-energia-eletrica-para-distribuicao-ou-comercializacao",
        "titulo": "3251 - Compra de energia elétrica para distribuição ou comercialização",
        "descricao": "Classificam-se neste código as compras de energia elétrica utilizada em sistema de distribuição ou comercialização. Também serão classificadas neste código as compras de energia elétrica por cooperativas para distribuição aos seus cooperados."
    },
    {
        "id": "3301",
        "idPai": "3300",
        "idLink": "3301-aquisicao-de-servico-de-comunicacao-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "3301 - Aquisição de serviço de comunicação para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as aquisições de serviços de comunicação utilizados nas prestações de serviços da mesma natureza."
    },
    {
        "id": "3351",
        "idPai": "3350",
        "idLink": "3351-aquisicao-de-servico-de-transporte-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "3351 - Aquisição de serviço de transporte para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados nas prestações de serviços da mesma natureza."
    },
    {
        "id": "3352",
        "idPai": "3350",
        "idLink": "3352-aquisicao-de-servico-de-transporte-por-estabelecimento-industrial",
        "titulo": "3352 - Aquisição de serviço de transporte por estabelecimento industrial",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento industrial. Também serão classificadas neste código as aquisições de serviços de transporte utilizados por estabelecimento industrial de cooperativa."
    },
    {
        "id": "3353",
        "idPai": "3350",
        "idLink": "3353-aquisicao-de-servico-de-transporte-por-estabelecimento-comercial",
        "titulo": "3353 - Aquisição de serviço de transporte por estabelecimento comercial",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento comercial. Também serão classificadas neste código as aquisições de serviços de transporte utilizados por estabelecimento comercial de cooperativa."
    },
    {
        "id": "3354",
        "idPai": "3350",
        "idLink": "3354-aquisicao-de-servico-de-transporte-por-estabelecimento-de-prestador-de-servico-de-comunicacao",
        "titulo": "3354 - Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento prestador de serviços de comunicação."
    },
    {
        "id": "3355",
        "idPai": "3350",
        "idLink": "3355-aquisicao-de-servico-de-transporte-por-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "3355 - Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "3356",
        "idPai": "3350",
        "idLink": "3356-aquisicao-de-servico-de-transporte-por-estabelecimento-de-produtor-rural",
        "titulo": "3356 - Aquisição de serviço de transporte por estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as aquisições de serviços de transporte utilizados por estabelecimento de produtor rural."
    },
    {
        "id": "3503",
        "idPai": "3500",
        "idLink": "3503-devolucao-de-mercadoria-exportada-que-tenha-sido-recebida-com-fim-especifico-de-exportacao",
        "titulo": "3503 - Devolução de mercadoria exportada que tenha sido recebida com fim específico de exportação",
        "descricao": "Classificam-se neste código as devoluções de mercadorias exportadas por trading company, empresa comercial exportadora ou outro estabelecimento do remetente, recebidas com fim específico de exportação, cujas saídas tenham sido classificadas no código \"7.501 – Exportação de mercadorias recebidas com fim específico de exportação\"."
    },
    {
        "id": "3551",
        "idPai": "3550",
        "idLink": "3551-compra-de-bem-para-o-ativo-imobilizado",
        "titulo": "3551 - Compra de bem para o ativo imobilizado",
        "descricao": "Classificam-se neste código as compras de bens destinados ao ativo imobilizado do estabelecimento."
    },
    {
        "id": "3553",
        "idPai": "3550",
        "idLink": "3553-devolucao-de-venda-de-bem-do-ativo-imobilizado",
        "titulo": "3553 - Devolução de venda de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as devoluções de vendas de bens do ativo imobilizado, cujas saídas tenham sido classificadas no código “7.551 - Venda de bem do ativo imobilizado”."
    },
    {
        "id": "3556",
        "idPai": "3550",
        "idLink": "3556-compra-de-material-para-uso-ou-consumo",
        "titulo": "3556 - Compra de material para uso ou consumo",
        "descricao": "Classificam-se neste código as compras de mercadorias destinadas ao uso ou consumo do estabelecimento."
    },
    {
        "id": "3651",
        "idPai": "3650",
        "idLink": "3651-compra-de-combustivel-ou-lubrificante-para-industrializacao-subsequeente",
        "titulo": "3651 - Compra de combustível ou lubrificante para industrialização subseqüente",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem utilizados em processo de industrialização do próprio produto."
    },
    {
        "id": "3652",
        "idPai": "3650",
        "idLink": "3652-compra-de-combustivel-ou-lubrificante-para-comercializacao",
        "titulo": "3652 - Compra de combustível ou lubrificante para comercialização",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem comercializados."
    },
    {
        "id": "3653",
        "idPai": "3650",
        "idLink": "3653-compra-de-combustivel-ou-lubrificante-por-consumidor-ou-usuario-final",
        "titulo": "3653 - Compra de combustível ou lubrificante por consumidor ou usuário final",
        "descricao": "Classificam-se neste código as compras de combustíveis ou lubrificantes a serem consumidos em processo de industrialização de outros produtos, na prestação de serviços ou por usuário final."
    },
    {
        "id": "3930",
        "idPai": "3900",
        "idLink": "3930-lancamento-efetuado-a-titulo-de-entrada-de-bem-sob-amparo-de-regime-especial-aduaneiro-de-admissao-temporaria",
        "titulo": "3930 - Lançamento efetuado a título de entrada de bem sob amparo de regime especial aduaneiro de admissão temporária",
        "descricao": "Classificam-se neste código os lançamentos efetuados a título de entrada de bens amparada por regime especial aduaneiro de admissão temporária."
    },
    {
        "id": "3949",
        "idPai": "3900",
        "idLink": "3949-outra-entrada-de-mercadoria-ou-prestacao-de-servico-nao-especificado",
        "titulo": "3949 - Outra entrada de mercadoria ou prestação de serviço não especificado",
        "descricao": "Classificam-se neste código as outras entradas de mercadorias ou prestações de serviços que não tenham sido especificados nos códigos anteriores."
    },
    {
        "id": "5000",
        "idPai": 0,
        "idLink": "5000-saidas-ou-prestacoes-de-servicos-para-o-estado",
        "titulo": "5000 - Saídas ou prestações de serviços para o Estado",
        "descricao": "Classificam-se, neste grupo, as operações ou prestações em que o estabelecimento remetente esteja localizado na mesma unidade da Federação do destinatário."
    },
    {
        "id": "5100",
        "idPai": "5000",
        "idLink": "5100-vendas-de-producao-propria-ou-de-terceiros",
        "titulo": "5100 - Vendas de produção própria ou de terceiros"
    },
    {
        "id": "5150",
        "idPai": "5000",
        "idLink": "5150-transferencias-de-producao-propria-ou-de-terceiros",
        "titulo": "5150 - Transferências de produção própria ou de terceiros "
    },
    {
        "id": "5200",
        "idPai": "5000",
        "idLink": "5200-devolucoes-de-compras-para-industrializacao-comercializacao-ou-anulacoes-de-valores",
        "titulo": "5200 - Devoluções de compras para industrialização, comercialização ou anulações de valores "
    },
    {
        "id": "5250",
        "idPai": "5000",
        "idLink": "5250-vendas-de-energia-eletrica",
        "titulo": "5250 - Vendas de energia elétrica "
    },
    {
        "id": "5300",
        "idPai": "5000",
        "idLink": "5300-prestacoes-de-servicos-de-comunicacao",
        "titulo": "5300 - Prestações de serviços de comunicação"
    },
    {
        "id": "5350",
        "idPai": "5000",
        "idLink": "5350-prestacoes-de-servicos-de-transporte",
        "titulo": "5350 - Prestações de serviços de transporte"
    },
    {
        "id": "5400",
        "idPai": "5000",
        "idLink": "5400-saidas-de-mercadorias-sujeitas-ao-regime-de-substituicao-tributaria",
        "titulo": "5400 - Saídas de mercadorias sujeitas ao regime de substituição tributária"
    },
    {
        "id": "5450",
        "idPai": "5000",
        "idLink": "5450-sistemas-de-integracao",
        "titulo": "5450 - Sistemas de integração"
    },
    {
        "id": "5500",
        "idPai": "5000",
        "idLink": "5500-remessas-com-fim-especifico-de-exportacao-e-eventuais-devolucoes",
        "titulo": "5500 - Remessas com fim específico de exportação e eventuais devoluções"
    },
    {
        "id": "5550",
        "idPai": "5000",
        "idLink": "5550-operacoes-com-bens-de-ativo-imobilizado-e-materiais-para-uso-ou-consumo",
        "titulo": "5550 - Operações com bens de ativo imobilizado e materiais para uso ou consumo"
    },
    {
        "id": "5600",
        "idPai": "5000",
        "idLink": "5600-creditos-e-ressarcimentos-de-icms",
        "titulo": "5600 - Créditos e ressarcimentos de ICMS"
    },
    {
        "id": "5650",
        "idPai": "5000",
        "idLink": "5650-saidas-de-combustiveis-derivados-ou-nao-de-petroleo-e-lubrificantes",
        "titulo": "5650 - Saídas de combustíveis, derivados ou não de petróleo e lubrificantes"
    },
    {
        "id": "5900",
        "idPai": "5000",
        "idLink": "5900-outras-saidas-de-mercadorias-ou-prestacoes-de-servicos",
        "titulo": "5900 - Outras saídas de mercadorias ou prestações de serviços"
    },
    {
        "id": "5101",
        "idPai": "5100",
        "idLink": "5101-venda-de-producao-do-estabelecimento",
        "titulo": "5101 - Venda de produção do estabelecimento",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento. Também serão classificadas neste código as vendas de mercadorias por estabelecimento industrial de cooperativa destinadas a seus cooperados ou a estabelecimento de outra cooperativa."
    },
    {
        "id": "5102",
        "idPai": "5100",
        "idLink": "5102-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "5102 - Venda de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial no estabelecimento. Também serão classificadas neste código as vendas de mercadorias por estabelecimento comercial de cooperativa destinadas a seus cooperados ou estabelecimento de outra cooperativa."
    },
    {
        "id": "5103",
        "idPai": "5100",
        "idLink": "5103-venda-de-producao-do-estabelecimento-efetuada-fora-do-estabelecimento",
        "titulo": "5103 - Venda de produção do estabelecimento, efetuada fora do estabelecimento",
        "descricao": "Classificam-se neste código as vendas efetuadas fora do estabelecimento, inclusive por meio de veículo, de produtos industrializados no estabelecimento."
    },
    {
        "id": "5104",
        "idPai": "5100",
        "idLink": "5104-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-efetuada-fora-do-estabelecimento",
        "titulo": "5104 - Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento",
        "descricao": "Classificam-se neste código as vendas efetuadas fora do estabelecimento, inclusive por meio de veículo, de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial no estabelecimento."
    },
    {
        "id": "5105",
        "idPai": "5100",
        "idLink": "5105-venda-de-producao-do-estabelecimento-que-nao-deva-por-ele-transitar",
        "titulo": "5105 - Venda de produção do estabelecimento que não deva por ele transitar",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento, armazenados em depósito fechado, armazém geral ou outro sem que haja retorno ao estabelecimento depositante."
    },
    {
        "id": "5106",
        "idPai": "5100",
        "idLink": "5106-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-que-nao-deva-por-ele-transitar",
        "titulo": "5106 - Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, armazenadas em depósito fechado, armazém geral ou outro, que não tenham sido objeto de qualquer processo industrial no estabelecimento sem que haja retorno ao estabelecimento depositante. Também serão classificadas neste código as vendas de mercadorias importadas, cuja saída ocorra do recinto alfandegado ou da repartição alfandegária onde se processou o desembaraço aduaneiro, com destino ao estabelecimento do comprador, sem transitar pelo estabelecimento do importador."
    },
    {
        "id": "5109",
        "idPai": "5100",
        "idLink": "5109-venda-de-producao-do-estabelecimento-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "5109 - Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados pelo estabelecimento, destinados à Zona Franca de Manaus ou Áreas de Livre Comércio."
    },
    {
        "id": "5110",
        "idPai": "5100",
        "idLink": "5110-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "5110 - Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, destinadas à Zona Franca de Manaus ou Áreas de Livre Comércio."
    },
    {
        "id": "5111",
        "idPai": "5100",
        "idLink": "5111-venda-de-producao-do-estabelecimento-remetida-anteriormente-em-consignacao-industrial",
        "titulo": "5111 - Venda de produção do estabelecimento remetida anteriormente em consignação industrial",
        "descricao": "Classificam-se neste código as vendas efetivas de produtos industrializados no estabelecimento remetidos anteriormente a título de consignação industrial."
    },
    {
        "id": "5112",
        "idPai": "5100",
        "idLink": "5112-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-anteriormente-em-consignacao-industrial",
        "titulo": "5112 - Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação industrial",
        "descricao": "Classificam-se neste código as vendas efetivas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas anteriormente a título de consignação industrial."
    },
    {
        "id": "5113",
        "idPai": "5100",
        "idLink": "5113-venda-de-producao-do-estabelecimento-remetida-anteriormente-em-consignacao-mercantil",
        "titulo": "5113 - Venda de produção do estabelecimento remetida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as vendas efetivas de produtos industrializados no estabelecimento remetidos anteriormente a título de consignação mercantil."
    },
    {
        "id": "5114",
        "idPai": "5100",
        "idLink": "5114-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-anteriormente-em-consignacao-mercantil",
        "titulo": "5114 - Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as vendas efetivas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas anteriormente a título de consignação mercantil."
    },
    {
        "id": "5115",
        "idPai": "5100",
        "idLink": "5115-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-recebida-anteriormente-em-consignacao-mercantil",
        "titulo": "5115 - Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, recebidas anteriormente a título de consignação mercantil."
    },
    {
        "id": "5116",
        "idPai": "5100",
        "idLink": "5116-venda-de-producao-do-estabelecimento-originada-de-encomenda-para-entrega-futura",
        "titulo": "5116 - Venda de produção do estabelecimento originada de encomenda para entrega futura",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados pelo estabelecimento, quando da saída real do produto, cujo faturamento tenha sido classificado no código \"5.922 – Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\"."
    },
    {
        "id": "5117",
        "idPai": "5100",
        "idLink": "5117-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-originada-de-encomenda-para-entrega-futura",
        "titulo": "5117 - Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, quando da saída real da mercadoria, cujo faturamento tenha sido classificado no código \"5.922 – Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\"."
    },
    {
        "id": "5118",
        "idPai": "5100",
        "idLink": "5118-venda-de-producao-do-estabelecimento-entregue-ao-destinatario-por-conta-e-ordem-do-adquirente-originario-em-venda-a-ordem",
        "titulo": "5118 - Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
        "descricao": "Classificam-se neste código as vendas à ordem de produtos industrializados pelo estabelecimento, entregues ao destinatário por conta e ordem do adquirente originário."
    },
    {
        "id": "5119",
        "idPai": "5100",
        "idLink": "5119-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-entregue-ao-destinatario-por-conta-e-ordem-do-adquirente-originario-em-venda-a-ordem",
        "titulo": "5119 - Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
        "descricao": "Classificam-se neste código as vendas à ordem de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, entregues ao destinatário por conta e ordem do adquirente originário."
    },
    {
        "id": "5120",
        "idPai": "5100",
        "idLink": "5120-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-entregue-ao-destinatario-pelo-vendedor-remetente-em-venda-a-ordem",
        "titulo": "5120 - Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem",
        "descricao": "Classificam-se neste código as vendas à ordem de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, entregues pelo vendedor remetente ao destinatário, cuja compra seja classificada, pelo adquirente originário, no código \"1.118 – Compra de mercadoria pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem\"."
    },
    {
        "id": "5122",
        "idPai": "5100",
        "idLink": "5122-venda-de-producao-do-estabelecimento-remetida-para-industrializacao-por-conta-e-ordem-do-adquirente-sem-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "5122 - Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento, remetidos para serem industrializados em outro estabelecimento, por conta e ordem do adquirente, sem que os produtos tenham transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "5123",
        "idPai": "5100",
        "idLink": "5123-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-para-industrializacao-por-conta-e-ordem-do-adquirente-sem-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "5123 - Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas para serem industrializadas em outro estabelecimento, por conta e ordem do adquirente, sem que as mercadorias tenham transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "5124",
        "idPai": "5100",
        "idLink": "5124-industrializacao-efetuada-para-outra-empresa",
        "titulo": "5124 - Industrialização efetuada para outra empresa",
        "descricao": "Classificam-se neste código as saídas de mercadorias industrializadas para terceiros, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial."
    },
    {
        "id": "5125",
        "idPai": "5100",
        "idLink": "5125-industrializacao-efetuada-para-outra-empresa-quando-a-mercadoria-recebida-para-utilizacao-no-processo-de-industrializacao-nao-transitar-pelo-estabelecimento-adquirente-da-mercadoria",
        "titulo": "5125 - Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria",
        "descricao": "Classificam-se neste código as saídas de mercadorias industrializadas para outras empresas, em que as mercadorias recebidas para utilização no processo de industrialização não tenham transitado pelo estabelecimento do adquirente das mercadorias, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial."
    },
    {
        "id": "5151",
        "idPai": "5150",
        "idLink": "5151-transferencia-de-producao-do-estabelecimento",
        "titulo": "5151 - Transferência de produção do estabelecimento",
        "descricao": "Classificam-se neste código os produtos industrializados no estabelecimento e transferidos para outro estabelecimento da mesma empresa."
    },
    {
        "id": "5152",
        "idPai": "5150",
        "idLink": "5152-transferencia-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "5152 - Transferência de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização e que não tenham sido objeto de qualquer processo industrial no estabelecimento, transferidas para outro estabelecimento da mesma empresa."
    },
    {
        "id": "5153",
        "idPai": "5150",
        "idLink": "5153-transferencia-de-energia-eletrica",
        "titulo": "5153 - Transferência de energia elétrica",
        "descricao": "Classificam-se neste código as transferências de energia elétrica para outro estabelecimento da mesma empresa, para distribuição."
    },
    {
        "id": "5155",
        "idPai": "5150",
        "idLink": "5155-transferencia-de-producao-do-estabelecimento-que-nao-deva-por-ele-transitar",
        "titulo": "5155 - Transferência de produção do estabelecimento, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as transferências para outro estabelecimento da mesma empresa, de produtos industrializados no estabelecimento que tenham sido remetidos para armazém geral, depósito fechado ou outro, sem que haja retorno ao estabelecimento depositante."
    },
    {
        "id": "5156",
        "idPai": "5150",
        "idLink": "5156-transferencia-de-mercadoria-adquirida-ou-recebida-de-terceiros-que-nao-deva-por-ele-transitar",
        "titulo": "5156 - Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as transferências para outro estabelecimento da mesma empresa, de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial, remetidas para armazém geral, depósito fechado ou outro, sem que haja retorno ao estabelecimento depositante."
    },
    {
        "id": "5201",
        "idPai": "5200",
        "idLink": "5201-devolucao-de-compra-para-industrializacao",
        "titulo": "5201 - Devolução de compra para industrialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem utilizadas em processo de industrialização, cujas entradas tenham sido classificadas como “Compra para industrialização”."
    },
    {
        "id": "5202",
        "idPai": "5200",
        "idLink": "5202-devolucao-de-compra-para-comercializacao",
        "titulo": "5202 - Devolução de compra para comercialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem comercializadas, cujas entradas tenham sido classificadas como “Compra para comercialização”."
    },
    {
        "id": "5205",
        "idPai": "5200",
        "idLink": "5205-anulacao-de-valor-relativo-a-aquisicao-de-servico-de-comunicacao",
        "titulo": "5205 - Anulação de valor relativo a aquisição de serviço de comunicação",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes das aquisições de serviços de comunicação."
    },
    {
        "id": "5206",
        "idPai": "5200",
        "idLink": "5206-anulacao-de-valor-relativo-a-aquisicao-de-servico-de-transporte",
        "titulo": "5206 - Anulação de valor relativo a aquisição de serviço de transporte",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes das aquisições de serviços de transporte."
    },
    {
        "id": "5207",
        "idPai": "5200",
        "idLink": "5207-anulacao-de-valor-relativo-a-compra-de-energia-eletrica",
        "titulo": "5207 - Anulação de valor relativo à compra de energia elétrica",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes da compra de energia elétrica."
    },
    {
        "id": "5208",
        "idPai": "5200",
        "idLink": "5208-devolucao-de-mercadoria-recebida-em-transferencia-para-industrializacao",
        "titulo": "5208 - Devolução de mercadoria recebida em transferência para industrialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias recebidas em transferência de outros estabelecimentos da mesma empresa, para serem utilizadas em processo de industrialização."
    },
    {
        "id": "5209",
        "idPai": "5200",
        "idLink": "5209-devolucao-de-mercadoria-recebida-em-transferencia-para-comercializacao",
        "titulo": "5209 - Devolução de mercadoria recebida em transferência para comercialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem comercializadas."
    },
    {
        "id": "5210",
        "idPai": "5200",
        "idLink": "5210-devolucao-de-compra-para-utilizacao-na-prestacao-de-servico",
        "titulo": "5210 - Devolução de compra para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para utilização na prestação de serviços, cujas entradas tenham sido classificadas no código “1.126 - Compra para utilização na prestação de serviço”."
    },
    {
        "id": "5251",
        "idPai": "5250",
        "idLink": "5251-venda-de-energia-eletrica-para-distribuicao-ou-comercializacao",
        "titulo": "5251 - Venda de energia elétrica para distribuição ou comercialização",
        "descricao": "Classificam-se neste código as vendas de energia elétrica destinada à distribuição ou comercialização. Também serão classificadas neste código as vendas de energia elétrica destinada a cooperativas para distribuição aos seus cooperados."
    },
    {
        "id": "5252",
        "idPai": "5250",
        "idLink": "5252-venda-de-energia-eletrica-para-estabelecimento-industrial",
        "titulo": "5252 - Venda de energia elétrica para estabelecimento industrial",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento industrial. Também serão classificadas neste código as vendas de energia elétrica destinada a estabelecimento industrial de cooperativa."
    },
    {
        "id": "5253",
        "idPai": "5250",
        "idLink": "5253-venda-de-energia-eletrica-para-estabelecimento-comercial",
        "titulo": "5253 - Venda de energia elétrica para estabelecimento comercial",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento comercial. Também serão classificadas neste código as vendas de energia elétrica destinada a estabelecimento comercial de cooperativa."
    },
    {
        "id": "5254",
        "idPai": "5250",
        "idLink": "5254-venda-de-energia-eletrica-para-estabelecimento-prestador-de-servico-de-transporte",
        "titulo": "5254 - Venda de energia elétrica para estabelecimento prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento de prestador de serviços de transporte."
    },
    {
        "id": "5255",
        "idPai": "5250",
        "idLink": "5255-venda-de-energia-eletrica-para-estabelecimento-prestador-de-servico-de-comunicacao",
        "titulo": "5255 - Venda de energia elétrica para estabelecimento prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento de prestador de serviços de comunicação."
    },
    {
        "id": "5256",
        "idPai": "5250",
        "idLink": "5256-venda-de-energia-eletrica-para-estabelecimento-de-produtor-rural",
        "titulo": "5256 - Venda de energia elétrica para estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento de produtor rural."
    },
    {
        "id": "5257",
        "idPai": "5250",
        "idLink": "5257-venda-de-energia-eletrica-para-consumo-por-demanda-contratada",
        "titulo": "5257 - Venda de energia elétrica para consumo por demanda contratada",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por demanda contratada, que prevalecerá sobre os demais códigos deste subgrupo."
    },
    {
        "id": "5258",
        "idPai": "5250",
        "idLink": "5258-venda-de-energia-eletrica-a-nao-contribuinte",
        "titulo": "5258 - Venda de energia elétrica a não contribuinte",
        "descricao": "Classificam-se neste código as vendas de energia elétrica a pessoas físicas ou a pessoas jurídicas não indicadas nos códigos anteriores."
    },
    {
        "id": "5301",
        "idPai": "5300",
        "idLink": "5301-prestacao-de-servico-de-comunicacao-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "5301 - Prestação de serviço de comunicação para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação destinados às prestações de serviços da mesma natureza."
    },
    {
        "id": "5302",
        "idPai": "5300",
        "idLink": "5302-prestacao-de-servico-de-comunicacao-a-estabelecimento-industrial",
        "titulo": "5302 - Prestação de serviço de comunicação a estabelecimento industrial",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento industrial. Também serão classificados neste código os serviços de comunicação prestados a estabelecimento industrial de cooperativa."
    },
    {
        "id": "5303",
        "idPai": "5300",
        "idLink": "5303-prestacao-de-servico-de-comunicacao-a-estabelecimento-comercial",
        "titulo": "5303 - Prestação de serviço de comunicação a estabelecimento comercial",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento comercial. Também serão classificados neste código os serviços de comunicação prestados a estabelecimento comercial de cooperativa."
    },
    {
        "id": "5304",
        "idPai": "5300",
        "idLink": "5304-prestacao-de-servico-de-comunicacao-a-estabelecimento-de-prestador-de-servico-de-transporte",
        "titulo": "5304 - Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento prestador de serviço de transporte."
    },
    {
        "id": "5305",
        "idPai": "5300",
        "idLink": "5305-prestacao-de-servico-de-comunicacao-a-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "5305 - Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "5306",
        "idPai": "5300",
        "idLink": "5306-prestacao-de-servico-de-comunicacao-a-estabelecimento-de-produtor-rural",
        "titulo": "5306 - Prestação de serviço de comunicação a estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento de produtor rural"
    },
    {
        "id": "5307",
        "idPai": "5300",
        "idLink": "5307-prestacao-de-servico-de-comunicacao-a-nao-contribuinte",
        "titulo": "5307 - Prestação de serviço de comunicação a não contribuinte",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a pessoas físicas ou a pessoas jurídicas não indicadas nos códigos anteriores."
    },
    {
        "id": "5351",
        "idPai": "5350",
        "idLink": "5351-prestacao-de-servico-de-transporte-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "5351 - Prestação de serviço de transporte para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte destinados às prestações de serviços da mesma natureza."
    },
    {
        "id": "5352",
        "idPai": "5350",
        "idLink": "5352-prestacao-de-servico-de-transporte-a-estabelecimento-industrial",
        "titulo": "5352 - Prestação de serviço de transporte a estabelecimento industrial",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento industrial. Também serão classificados neste código os serviços de transporte prestados a estabelecimento industrial de cooperativa."
    },
    {
        "id": "5353",
        "idPai": "5350",
        "idLink": "5353-prestacao-de-servico-de-transporte-a-estabelecimento-comercial",
        "titulo": "5353 - Prestação de serviço de transporte a estabelecimento comercial",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento comercial. Também serão classificados neste código os serviços de transporte prestados a estabelecimento comercial de cooperativa."
    },
    {
        "id": "5354",
        "idPai": "5350",
        "idLink": "5354-prestacao-de-servico-de-transporte-a-estabelecimento-de-prestador-de-servico-de-comunicacao",
        "titulo": "5354 - Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento prestador de serviços de comunicação."
    },
    {
        "id": "5355",
        "idPai": "5350",
        "idLink": "5355-prestacao-de-servico-de-transporte-a-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "5355 - Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "5356",
        "idPai": "5350",
        "idLink": "5356-prestacao-de-servico-de-transporte-a-estabelecimento-de-produtor-rural",
        "titulo": "5356 - Prestação de serviço de transporte a estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento de produtor rural."
    },
    {
        "id": "5357",
        "idPai": "5350",
        "idLink": "5357-prestacao-de-servico-de-transporte-a-nao-contribuinte",
        "titulo": "5357 - Prestação de serviço de transporte a não contribuinte",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a pessoas físicas ou a pessoas jurídicas não indicadas nos códigos anteriores."
    },
    {
        "id": "5359",
        "idPai": "5350",
        "idLink": "5359-prestacao-de-servico-de-transporte-a-contribuinte-ou-a-nao-contribuinte-quando-a-mercadoria-transportada-esta-dispensada-de-emissao-de-nota-fiscal",
        "titulo": "5359 - Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal.",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a contribuintes ou a não contribuintes, exclusivamente quando não existe a obrigação legal de emissão de nota fiscal para a mercadoria transportada."
    },
    {
        "id": "5401",
        "idPai": "5400",
        "idLink": "5401-venda-de-producao-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria-na-condicao-de-contribuinte-substituto",
        "titulo": "5401 - Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento em operações com produtos sujeitos ao regime de substituição tributária, na condição de contribuinte substituto. Também serão classificadas neste código as vendas de produtos industrializados por estabelecimento industrial de cooperativa sujeitos ao regime de substituição tributária, na condição de contribuinte substituto."
    },
    {
        "id": "5402",
        "idPai": "5400",
        "idLink": "5402-venda-de-producao-do-estabelecimento-de-produto-sujeito-ao-regime-de-substituicao-tributaria-em-operacao-entre-contribuintes-substitutos-do-mesmo-produto",
        "titulo": "5402 - Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto",
        "descricao": "Classificam-se neste código as vendas de produtos sujeitos ao regime de substituição tributária industrializados no estabelecimento, em operações entre contribuintes substitutos do mesmo produto."
    },
    {
        "id": "5403",
        "idPai": "5400",
        "idLink": "5403-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria-na-condicao-de-contribuinte-substituto",
        "titulo": "5403 - Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituto",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, na condição de contribuinte substituto, em operação com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "5405",
        "idPai": "5400",
        "idLink": "5405-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria-na-condicao-de-contribuinte-substituido",
        "titulo": "5405 - Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituído",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros em operação com mercadorias sujeitas ao regime de substituição tributária, na condição de contribuinte substituído."
    },
    {
        "id": "5408",
        "idPai": "5400",
        "idLink": "5408-transferencia-de-producao-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "5408 - Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código os produtos industrializados no estabelecimento e transferidos para outro estabelecimento da mesma empresa, em operações com produtos sujeitos ao regime de substituição tributária."
    },
    {
        "id": "5409",
        "idPai": "5400",
        "idLink": "5409-transferencia-de-mercadoria-adquirida-ou-recebida-de-terceiros-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "5409 - Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as transferências para outro estabelecimento da mesma empresa, de mercadorias adquiridas ou recebidas de terceiros que não tenham sido objeto de qualquer processo industrial no estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "5410",
        "idPai": "5400",
        "idLink": "5410-devolucao-de-compra-para-industrializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "5410 - Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem utilizadas em processo de industrialização cujas entradas tenham sido classificadas como \"Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "5411",
        "idPai": "5400",
        "idLink": "5411-devolucao-de-compra-para-comercializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "5411 - Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem comercializadas, cujas entradas tenham sido classificadas como “Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária”."
    },
    {
        "id": "5412",
        "idPai": "5400",
        "idLink": "5412-devolucao-de-bem-do-ativo-imobilizado-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "5412 - Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de bens adquiridos para integrar o ativo imobilizado do estabelecimento, cuja entrada tenha sido classificada no código \"1.406 – Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "5413",
        "idPai": "5400",
        "idLink": "5413-devolucao-de-mercadoria-destinada-ao-uso-ou-consumo-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "5413 - Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para uso ou consumo do estabelecimento, cuja entrada tenha sido classificada no código \"1.407 – Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "5414",
        "idPai": "5400",
        "idLink": "5414-remessa-de-producao-do-estabelecimento-para-venda-fora-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "5414 - Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as remessas de produtos industrializados pelo estabelecimento para serem vendidos fora do estabelecimento, inclusive por meio de veículos, em operações com produtos sujeitos ao regime de substituição tributária."
    },
    {
        "id": "5415",
        "idPai": "5400",
        "idLink": "5415-remessa-de-mercadoria-adquirida-ou-recebida-de-terceiros-para-venda-fora-do-estabelecimento-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "5415 - Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as remessas de mercadorias adquiridas ou recebidas de terceiros para serem vendidas fora do estabelecimento, inclusive por meio de veículos, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "5451",
        "idPai": "5450",
        "idLink": "5451-remessa-de-animal-e-de-insumo-para-estabelecimento-produtor",
        "titulo": "5451 - Remessa de animal e de insumo para estabelecimento produtor",
        "descricao": "Classificam-se neste código as saídas referentes à remessa de animais e de insumos para criação de animais no sistema integrado, tais como: pintos, leitões, rações e medicamentos."
    },
    {
        "id": "5501",
        "idPai": "5500",
        "idLink": "5501-remessa-de-producao-do-estabelecimento-com-fim-especifico-de-exportacao",
        "titulo": "5501 - Remessa de produção do estabelecimento, com fim específico de exportação",
        "descricao": "Classificam-se neste código as saídas de produtos industrializados pelo estabelecimento, remetidos com fim específico de exportação a trading company, empresa comercial exportadora ou outro estabelecimento do remetente."
    },
    {
        "id": "5502",
        "idPai": "5500",
        "idLink": "5502-remessa-de-mercadoria-adquirida-ou-recebida-de-terceiros-com-fim-especifico-de-exportacao",
        "titulo": "5502 - Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação",
        "descricao": "Classificam-se neste código as saídas de mercadorias adquiridas ou recebidas de terceiros, remetidas com fim específico de exportação a trading company, empresa comercial exportadora ou outro estabelecimento do remetente."
    },
    {
        "id": "5503",
        "idPai": "5500",
        "idLink": "5503-devolucao-de-mercadoria-recebida-com-fim-especifico-de-exportacao",
        "titulo": "5503 - Devolução de mercadoria recebida com fim específico de exportação",
        "descricao": "Classificam-se neste código as devoluções efetuadas por trading company, empresa comercial exportadora ou outro estabelecimento do destinatário, de mercadorias recebidas com fim específico de exportação, cujas entradas tenham sido classificadas no código \"1.501 – Entrada de mercadoria recebida com fim específico de exportação\"."
    },
    {
        "id": "5504",
        "idPai": "5500",
        "idLink": "5504-remessa-de-mercadorias-para-formacao-de-lote-de-exportacao-de-produtos-industrializados-ou-produzidos-pelo-proprio-estabelecimento",
        "titulo": "5504 - Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
        "descricao": "Classificam-se neste código as remessas de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento."
    },
    {
        "id": "5505",
        "idPai": "5500",
        "idLink": "5505-remessa-de-mercadorias-adquiridas-ou-recebidas-de-terceiros-para-formacao-de-lote-de-exportacao",
        "titulo": "5505 - Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação.",
        "descricao": "Classificam-se neste código as remessas de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação."
    },
    {
        "id": "5551",
        "idPai": "5550",
        "idLink": "5551-venda-de-bem-do-ativo-imobilizado",
        "titulo": "5551 - Venda de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as vendas de bens integrantes do ativo imobilizado do estabelecimento.\nde bem do ativo imobilizado"
    },
    {
        "id": "5552",
        "idPai": "5550",
        "idLink": "5552-transferencia-de-bem-do-ativo-imobilizado",
        "titulo": "5552 - Transferência de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código os bens do ativo imobilizado transferidos para outro estabelecimento da mesma empresa."
    },
    {
        "id": "5553",
        "idPai": "5550",
        "idLink": "5553-devolucao-de-compra-de-bem-para-o-ativo-imobilizado",
        "titulo": "5553 - Devolução de compra de bem para o ativo imobilizado",
        "descricao": "Classificam-se neste código as devoluções de bens adquiridos para integrar o ativo imobilizado do estabelecimento, cuja entrada foi classificada no código “1.551 - Compra de bem para o ativo imobilizado”."
    },
    {
        "id": "5554",
        "idPai": "5550",
        "idLink": "5554-remessa-de-bem-do-ativo-imobilizado-para-uso-fora-do-estabelecimento",
        "titulo": "5554 - Remessa de bem do ativo imobilizado para uso fora do estabelecimento",
        "descricao": "Classificam-se neste código as remessas de bens do ativo imobilizado para uso fora do estabelecimento."
    },
    {
        "id": "5555",
        "idPai": "5550",
        "idLink": "5555-devolucao-de-bem-do-ativo-imobilizado-de-terceiro-recebido-para-uso-no-estabelecimento",
        "titulo": "5555 - Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento",
        "descricao": "Classificam-se neste código as saídas em devolução, de bens do ativo imobilizado de terceiros, recebidos para uso no estabelecimento, cuja entrada tenha sido classificada no código \"1.555 – Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento\"."
    },
    {
        "id": "5556",
        "idPai": "5550",
        "idLink": "5556-devolucao-de-compra-de-material-de-uso-ou-consumo",
        "titulo": "5556 - Devolução de compra de material de uso ou consumo",
        "descricao": "Classificam-se neste código as devoluções de mercadorias destinadas ao uso ou consumo do estabelecimento, cuja entrada tenha sido classificada no código “1.556 - Compra de material para uso ou consumo”."
    },
    {
        "id": "5557",
        "idPai": "5550",
        "idLink": "5557-transferencia-de-material-de-uso-ou-consumo",
        "titulo": "5557 - Transferência de material de uso ou consumo",
        "descricao": "Classificam-se neste código os materiais para uso ou consumo transferidos para outro estabelecimento da mesma empresa."
    },
    {
        "id": "5601",
        "idPai": "5600",
        "idLink": "5601-transferencia-de-credito-de-icms-acumulado",
        "titulo": "5601 - Transferência de crédito de ICMS acumulado",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro da transferência de créditos de ICMS para outras empresas."
    },
    {
        "id": "5602",
        "idPai": "5600",
        "idLink": "5602-transferencia-de-saldo-credor-de-icms-para-outro-estabelecimento-da-mesma-empresa-destinado-a-compensacao-de-saldo-devedor-de-icms",
        "titulo": "5602 - Transferência de saldo credor de ICMS para outro estabelecimento da mesma empresa, destinado à compensação de saldo devedor de ICMS",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro da transferência de saldos credores de ICMS para outros estabelecimentos da mesma empresa, destinados à compensação do saldo devedor desses estabelecimentos."
    },
    {
        "id": "5603",
        "idPai": "5600",
        "idLink": "5603-ressarcimento-de-icms-retido-por-substituicao-tributaria",
        "titulo": "5603 - Ressarcimento de ICMS retido por substituição tributária",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro de ressarcimento de ICMS retido por substituição tributária a contribuinte substituído, efetuado pelo contribuinte substituto, nas hipóteses previstas na legislação aplicável."
    },
    {
        "id": "5605",
        "idPai": "5600",
        "idLink": "5605-transferencia-de-saldo-devedor-de-icms-de-outro-estabelecimento-da-mesma-empresa",
        "titulo": "5605 - Transferência de saldo devedor de ICMS de outro estabelecimento da mesma empresa.",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro da transferência de saldo devedor de ICMS para outro estabelecimento da mesma empresa, para efetivação da apuração centralizada do imposto."
    },
    {
        "id": "5606",
        "idPai": "5600",
        "idLink": "5606-utilizacao-de-saldo-credor-de-icms-para-extincao-por-compensacao-de-debitos-fiscais",
        "titulo": "5606 - Utilização de saldo credor de ICMS para extinção por compensação de débitos fiscais",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro de utilização de saldo credor de ICMS em conta gráfica para extinção por compensação de débitos fiscais desvinculados de conta gráfica."
    },
    {
        "id": "5651",
        "idPai": "5650",
        "idLink": "5651-venda-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento-destinado-a-industrializacao-subsequeente",
        "titulo": "5651 - Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes industrializados no estabelecimento destinados à industrialização do próprio produto, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 - “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "5652",
        "idPai": "5650",
        "idLink": "5652-venda-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento-destinado-a-comercializacao",
        "titulo": "5652 - Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes industrializados no estabelecimento destinados à comercialização, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 - “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "5653",
        "idPai": "5650",
        "idLink": "5653-venda-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento-destinado-a-consumidor-ou-usuario-final",
        "titulo": "5653 - Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes industrializados no estabelecimento destinados a consumo em processo de industrialização de outros produtos, à prestação de serviços ou a usuário final, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 - “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "5654",
        "idPai": "5650",
        "idLink": "5654-venda-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-destinado-a-industrializacao-subsequeente",
        "titulo": "5654 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes adquiridos ou recebidos de terceiros destinados à industrialização do próprio produto, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 - “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "5655",
        "idPai": "5650",
        "idLink": "5655-venda-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-destinado-a-comercializacao",
        "titulo": "5655 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes adquiridos ou recebidos de terceiros destinados à comercialização, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 - “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "5656",
        "idPai": "5650",
        "idLink": "5656-venda-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-destinado-a-consumidor-ou-usuario-final",
        "titulo": "5656 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes adquiridos ou recebidos de terceiros destinados a consumo em processo de industrialização de outros produtos, à prestação de serviços ou a usuário final, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 - “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "5657",
        "idPai": "5650",
        "idLink": "5657-remessa-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-para-venda-fora-do-estabelecimento",
        "titulo": "5657 - Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento",
        "descricao": "Classificam-se neste código as remessas de combustíveis ou lubrificante, adquiridos ou recebidos de terceiros para serem vendidos fora do estabelecimento, inclusive por meio de veículos."
    },
    {
        "id": "5658",
        "idPai": "5650",
        "idLink": "5658-transferencia-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento",
        "titulo": "5658 - Transferência de combustível ou lubrificante de produção do estabelecimento",
        "descricao": "Classificam-se neste código as transferências de combustíveis ou lubrificantes, industrializados no estabelecimento, para outro estabelecimento da mesma empresa."
    },
    {
        "id": "5659",
        "idPai": "5650",
        "idLink": "5659-transferencia-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiro",
        "titulo": "5659 - Transferência de combustível ou lubrificante adquirido ou recebido de terceiro",
        "descricao": "Classificam-se neste código as transferências de combustíveis ou lubrificantes, adquiridos ou recebidos de terceiros, para outro estabelecimento da mesma empresa."
    },
    {
        "id": "5660",
        "idPai": "5650",
        "idLink": "5660-devolucao-de-compra-de-combustivel-ou-lubrificante-adquirido-para-industrializacao-subsequeente",
        "titulo": "5660 - Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente",
        "descricao": "Classificam-se neste código as devoluções de compras de combustíveis ou lubrificantes adquiridos para industrialização do próprio produto, cujas entradas tenham sido classificadas como “Compra de combustível ou lubrificante para industrialização subseqüente”."
    },
    {
        "id": "5661",
        "idPai": "5650",
        "idLink": "5661-devolucao-de-compra-de-combustivel-ou-lubrificante-adquirido-para-comercializacao",
        "titulo": "5661 - Devolução de compra de combustível ou lubrificante adquirido para comercialização",
        "descricao": "Classificam-se neste código as devoluções de compras de combustíveis ou lubrificantes adquiridos para comercialização, cujas entradas tenham sido classificadas como “Compra de combustível ou lubrificante para comercialização”."
    },
    {
        "id": "5662",
        "idPai": "5650",
        "idLink": "5662-devolucao-de-compra-de-combustivel-ou-lubrificante-adquirido-por-consumidor-ou-usuario-final",
        "titulo": "5662 - Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final",
        "descricao": "Classificam-se neste código as devoluções de compras de combustíveis ou lubrificantes adquiridos para consumo em processo de industrialização de outros produtos, na prestação de serviços ou por usuário final, cujas entradas tenham sido classificadas como “Compra de combustível ou lubrificante por consumidor ou usuário final”."
    },
    {
        "id": "5663",
        "idPai": "5650",
        "idLink": "5663-remessa-para-armazenagem-de-combustivel-ou-lubrificante",
        "titulo": "5663 - Remessa para armazenagem de combustível ou lubrificante",
        "descricao": "Classificam-se neste código as remessas para armazenagem de combustíveis ou lubrificantes.\n5.664 - Retorno de combustível ou lubrificante recebido para armazenagem\nClassificam-se neste código as remessas em devolução de combustíveis ou lubrificantes, recebidos para armazenagem."
    },
    {
        "id": "5664",
        "idPai": "5650",
        "idLink": "5664-retorno-de-combustivel-ou-lubrificante-recebido-para-armazenagem",
        "titulo": "5664 - Retorno de combustível ou lubrificante recebido para armazenagem",
        "descricao": "Classificam-se neste código as remessas em devolução de combustíveis ou lubrificantes, recebidos para armazenagem."
    },
    {
        "id": "5665",
        "idPai": "5650",
        "idLink": "5665-retorno-simbolico-de-combustivel-ou-lubrificante-recebido-para-armazenagem",
        "titulo": "5665 - Retorno simbólico de combustível ou lubrificante recebido para armazenagem",
        "descricao": "Classificam-se neste código os retornos simbólicos de combustíveis ou lubrificantes recebidos para armazenagem, quando as mercadorias armazenadas tenham sido objeto de saída a qualquer título e não devam retornar ao estabelecimento depositante."
    },
    {
        "id": "5666",
        "idPai": "5650",
        "idLink": "5666-remessa-por-conta-e-ordem-de-terceiros-de-combustivel-ou-lubrificante-recebido-para-armazenagem",
        "titulo": "5666 - Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem",
        "descricao": "Classificam-se neste código as saídas por conta e ordem de terceiros, de combustíveis ou lubrificantes, recebidos anteriormente para armazenagem."
    },
    {
        "id": "5901",
        "idPai": "5900",
        "idLink": "5901-remessa-para-industrializacao-por-encomenda",
        "titulo": "5901 - Remessa para industrialização por encomenda",
        "descricao": "Classificam-se neste código as remessas de insumos remetidos para industrialização por encomenda, a ser realizada em outra empresa ou em outro estabelecimento da mesma empresa."
    },
    {
        "id": "5902",
        "idPai": "5900",
        "idLink": "5902-retorno-de-mercadoria-utilizada-na-industrializacao-por-encomenda",
        "titulo": "5902 - Retorno de mercadoria utilizada na industrialização por encomenda",
        "descricao": "Classificam-se neste código as remessas, pelo estabelecimento industrializador, dos insumos recebidos para industrialização e incorporados ao produto final, por encomenda de outra empresa ou de outro estabelecimento da mesma empresa. O valor dos insumos nesta operação deverá ser igual ao valor dos insumos recebidos para industrialização."
    },
    {
        "id": "5903",
        "idPai": "5900",
        "idLink": "5903-retorno-de-mercadoria-recebida-para-industrializacao-e-nao-aplicada-no-referido-processo",
        "titulo": "5903 - Retorno de mercadoria recebida para industrialização e não aplicada no referido processo",
        "descricao": "Classificam-se neste código as remessas em devolução de insumos recebidos para industrialização e não aplicados no referido processo."
    },
    {
        "id": "5904",
        "idPai": "5900",
        "idLink": "5904-remessa-para-venda-fora-do-estabelecimento",
        "titulo": "5904 - Remessa para venda fora do estabelecimento",
        "descricao": "Classificam-se neste código as remessas de mercadorias para venda fora do estabelecimento, inclusive por meio de veículos."
    },
    {
        "id": "5905",
        "idPai": "5900",
        "idLink": "5905-remessa-para-deposito-fechado-ou-armazem-geral",
        "titulo": "5905 - Remessa para depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as remessas de mercadorias para depósito em depósito fechado ou armazém geral."
    },
    {
        "id": "5906",
        "idPai": "5900",
        "idLink": "5906-retorno-de-mercadoria-depositada-em-deposito-fechado-ou-armazem-geral",
        "titulo": "5906 - Retorno de mercadoria depositada em depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código os retornos de mercadorias depositadas em depósito fechado ou armazém geral ao estabelecimento depositante."
    },
    {
        "id": "5907",
        "idPai": "5900",
        "idLink": "5907-retorno-simbolico-de-mercadoria-depositada-em-deposito-fechado-ou-armazem-geral",
        "titulo": "5907 - Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código os retornos simbólicos de mercadorias recebidas para depósito em depósito fechado ou armazém geral, quando as mercadorias depositadas tenham sido objeto de saída a qualquer título e que não devam retornar ao estabelecimento depositante."
    },
    {
        "id": "5908",
        "idPai": "5900",
        "idLink": "5908-remessa-de-bem-por-conta-de-contrato-de-comodato",
        "titulo": "5908 - Remessa de bem por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as remessas de bens para o cumprimento de contrato de comodato."
    },
    {
        "id": "5909",
        "idPai": "5900",
        "idLink": "5909-retorno-de-bem-recebido-por-conta-de-contrato-de-comodato",
        "titulo": "5909 - Retorno de bem recebido por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as remessas de bens em devolução após cumprido o contrato de comodato."
    },
    {
        "id": "5910",
        "idPai": "5900",
        "idLink": "5910-remessa-em-bonificacao-doacao-ou-brinde",
        "titulo": "5910 - Remessa em bonificação, doação ou brinde",
        "descricao": "Classificam-se neste código as remessas de mercadorias a título de bonificação, doação ou brinde."
    },
    {
        "id": "5911",
        "idPai": "5900",
        "idLink": "5911-remessa-de-amostra-gratis",
        "titulo": "5911 - Remessa de amostra grátis",
        "descricao": "Classificam-se neste código as remessas de mercadorias a título de amostra grátis."
    },
    {
        "id": "5912",
        "idPai": "5900",
        "idLink": "5912-remessa-de-mercadoria-ou-bem-para-demonstracao",
        "titulo": "5912 - Remessa de mercadoria ou bem para demonstração",
        "descricao": "Classificam-se neste código as remessas de mercadorias ou bens para demonstração."
    },
    {
        "id": "5913",
        "idPai": "5900",
        "idLink": "5913-retorno-de-mercadoria-ou-bem-recebido-para-demonstracao",
        "titulo": "5913 - Retorno de mercadoria ou bem recebido para demonstração",
        "descricao": "Classificam-se neste código as remessas em devolução de mercadorias ou bens recebidos para demonstração."
    },
    {
        "id": "5914",
        "idPai": "5900",
        "idLink": "5914-remessa-de-mercadoria-ou-bem-para-exposicao-ou-feira",
        "titulo": "5914 - Remessa de mercadoria ou bem para exposição ou feira",
        "descricao": "Classificam-se neste código as remessas de mercadorias ou bens para exposição ou feira."
    },
    {
        "id": "5915",
        "idPai": "5900",
        "idLink": "5915-remessa-de-mercadoria-ou-bem-para-conserto-ou-reparo",
        "titulo": "5915 - Remessa de mercadoria ou bem para conserto ou reparo",
        "descricao": "Classificam-se neste código as remessas de mercadorias ou bens para conserto ou reparo."
    },
    {
        "id": "5916",
        "idPai": "5900",
        "idLink": "5916-retorno-de-mercadoria-ou-bem-recebido-para-conserto-ou-reparo",
        "titulo": "5916 - Retorno de mercadoria ou bem recebido para conserto ou reparo",
        "descricao": "Classificam-se neste código as remessas em devolução de mercadorias ou bens recebidos para conserto ou reparo."
    },
    {
        "id": "5917",
        "idPai": "5900",
        "idLink": "5917-remessa-de-mercadoria-em-consignacao-mercantil-ou-industrial",
        "titulo": "5917 - Remessa de mercadoria em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as remessas de mercadorias a título de consignação mercantil ou industrial."
    },
    {
        "id": "5918",
        "idPai": "5900",
        "idLink": "5918-devolucao-de-mercadoria-recebida-em-consignacao-mercantil-ou-industrial",
        "titulo": "5918 - Devolução de mercadoria recebida em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as devoluções de mercadorias recebidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "5919",
        "idPai": "5900",
        "idLink": "5919-devolucao-simbolica-de-mercadoria-vendida-ou-utilizada-em-processo-industrial-recebida-anteriormente-em-consignacao-mercantil-ou-industrial",
        "titulo": "5919 - Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as devoluções simbólicas de mercadorias vendidas ou utilizadas em processo industrial, que tenham sido recebidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "5920",
        "idPai": "5900",
        "idLink": "5920-remessa-de-vasilhame-ou-sacaria",
        "titulo": "5920 - Remessa de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as remessas de vasilhame ou sacaria."
    },
    {
        "id": "5921",
        "idPai": "5900",
        "idLink": "5921-devolucao-de-vasilhame-ou-sacaria",
        "titulo": "5921 - Devolução de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as saídas por devolução de vasilhame ou sacaria."
    },
    {
        "id": "5922",
        "idPai": "5900",
        "idLink": "5922-lancamento-efetuado-a-titulo-de-simples-faturamento-decorrente-de-venda-para-entrega-futura",
        "titulo": "5922 - Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura",
        "descricao": "Classificam-se neste código os registros efetuados a título de simples faturamento decorrente de venda para entrega futura."
    },
    {
        "id": "5923",
        "idPai": "5900",
        "idLink": "5923-remessa-de-mercadoria-por-conta-e-ordem-de-terceiros-em-venda-a-ordem",
        "titulo": "5923 - Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem",
        "descricao": "Classificam-se neste código as saídas correspondentes à entrega de mercadorias por conta e ordem de terceiros, em vendas à ordem, cuja venda ao adquirente originário, foi classificada nos códigos \"5.118 – Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\" ou \"5.119 – Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\"."
    },
    {
        "id": "5924",
        "idPai": "5900",
        "idLink": "5924-remessa-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-esta-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "5924 - Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as saídas de insumos com destino a estabelecimento industrializador, para serem industrializados por conta e ordem do adquirente, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente dos mesmos."
    },
    {
        "id": "5925",
        "idPai": "5900",
        "idLink": "5925-retorno-de-mercadoria-recebida-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-aquela-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "5925 - Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as remessas, pelo estabelecimento industrializador, dos insumos recebidos, por conta e ordem do adquirente, para industrialização e incorporados ao produto final, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente. O valor dos insumos nesta operação deverá ser igual ao valor dos insumos recebidos para industrialização."
    },
    {
        "id": "5926",
        "idPai": "5900",
        "idLink": "5926-lancamento-efetuado-a-titulo-de-reclassificacao-de-mercadoria-decorrente-de-formacao-de-kit-ou-de-sua-desagregacao",
        "titulo": "5926 - Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação",
        "descricao": "Classificam-se neste código os registros efetuados a título de reclassificação decorrente de formação de kit de mercadorias ou de sua desagregação."
    },
    {
        "id": "5927",
        "idPai": "5900",
        "idLink": "5927-lancamento-efetuado-a-titulo-de-baixa-de-estoque-decorrente-de-perda-roubo-ou-deterioracao",
        "titulo": "5927 - Lançamento efetuado a título de baixa de estoque decorrente de perda, roubo ou deterioração",
        "descricao": "Classificam-se neste código os registros efetuados a título de baixa de estoque decorrente de perda, roubou ou deterioração das mercadorias."
    },
    {
        "id": "5928",
        "idPai": "5900",
        "idLink": "5928-lancamento-efetuado-a-titulo-de-baixa-de-estoque-decorrente-do-encerramento-da-atividade-da-empresa",
        "titulo": "5928 - Lançamento efetuado a título de baixa de estoque decorrente do encerramento da atividade da empresa",
        "descricao": "Classificam-se neste código os registros efetuados a título de baixa de estoque decorrente do encerramento das atividades da empresa."
    },
    {
        "id": "5929",
        "idPai": "5900",
        "idLink": "5929-lancamento-efetuado-em-decorrencia-de-emissao-de-documento-fiscal-relativo-a-operacao-ou-prestacao-tambem-registrada-em-equipamento-emissor-de-cupom-fiscal-ecf",
        "titulo": "5929 - Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF",
        "descricao": "Classificam-se neste código os registros relativos aos documentos fiscais emitidos em operações ou prestações que também tenham sido registradas em equipamento Emissor de Cupom Fiscal - ECF."
    },
    {
        "id": "5931",
        "idPai": "5900",
        "idLink": "5931-lancamento-efetuado-em-decorrencia-da-responsabilidade-de-retencao-do-imposto-por-substituicao-tributaria-atribuida-ao-remetente-ou-alienante-da-mercadoria-pelo-servico-de-transporte-realizado-por-transportador-autonomo-ou-por-transportador-nao-inscrito-na-unidade-da-federacao-onde-iniciado-o-servico",
        "titulo": "5931 - Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço",
        "descricao": "Classificam-se neste código exclusivamente os lançamentos efetuados pelo remetente ou alienante da mercadoria quando lhe for atribuída a responsabilidade pelo recolhimento do imposto devido pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço."
    },
    {
        "id": "5932",
        "idPai": "5900",
        "idLink": "5932-prestacao-de-servico-de-transporte-iniciada-em-unidade-da-federacao-diversa-daquela-onde-inscrito-o-prestador",
        "titulo": "5932 - Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador",
        "descricao": "Classificam-se neste código as prestações de serviço de transporte que tenham sido iniciadas em unidade da Federação diversa daquela onde o prestador está inscrito como contribuinte."
    },
    {
        "id": "5933",
        "idPai": "5900",
        "idLink": "5933-prestacao-de-servico-tributado-pelo-issqn",
        "titulo": "5933 - Prestação de serviço tributado pelo ISSQN.",
        "descricao": "Classificam-se neste código as prestações de serviços, de competência municipal, desde que informados em documentos autorizados pelo Estado."
    },
    {
        "id": "5949",
        "idPai": "5900",
        "idLink": "5949-outra-saida-de-mercadoria-ou-prestacao-de-servico-nao-especificado",
        "titulo": "5949 - Outra saída de mercadoria ou prestação de serviço não especificado",
        "descricao": "Classificam-se neste código as outras saídas de mercadorias ou prestações de serviços que não tenham sido especificados nos códigos anteriores."
    },
    {
        "id": "6000",
        "idPai": 0,
        "idLink": "6000-saidas-ou-prestacoes-de-servicos-para-outros-estados",
        "titulo": "6000 - Saídas ou prestações de serviços para outros Estados",
        "descricao": "Classificam-se, neste grupo, as operações ou prestações em que o estabelecimento remetente esteja localizado em unidade da Federação diversa daquela do destinatário."
    },
    {
        "id": "6100",
        "idPai": "6000",
        "idLink": "6100-vendas-de-producao-propria-ou-de-terceiros",
        "titulo": "6100 - Vendas de produção própria ou de terceiros"
    },
    {
        "id": "6150",
        "idPai": "6000",
        "idLink": "6150-transferencias-de-producao-propria-ou-de-terceiros",
        "titulo": "6150 - Transferências de produção própria ou de terceiros "
    },
    {
        "id": "6200",
        "idPai": "6000",
        "idLink": "6200-devolucoes-de-compras-para-industrializacao-comercializacao-ou-anulacoes-de-valores",
        "titulo": "6200 - Devoluções de compras para industrialização, comercialização ou anulações de valores "
    },
    {
        "id": "6250",
        "idPai": "6000",
        "idLink": "6250-vendas-de-energia-eletrica",
        "titulo": "6250 - Vendas de energia elétrica "
    },
    {
        "id": "6300",
        "idPai": "6000",
        "idLink": "6300-prestacoes-de-servicos-de-comunicacao",
        "titulo": "6300 - Prestações de serviços de comunicação"
    },
    {
        "id": "6350",
        "idPai": "6000",
        "idLink": "6350-prestacoes-de-servicos-de-transporte",
        "titulo": "6350 - Prestações de serviços de transporte"
    },
    {
        "id": "6400",
        "idPai": "6000",
        "idLink": "6400-saidas-de-mercadorias-sujeitas-ao-regime-de-substituicao-tributaria",
        "titulo": "6400 - Saídas de mercadorias sujeitas ao regime de substituição tributária"
    },
    {
        "id": "6500",
        "idPai": "6000",
        "idLink": "6500-remessas-com-fim-especifico-de-exportacao-e-eventuais-devolucoes",
        "titulo": "6500 - Remessas com fim específico de exportação e eventuais devoluções"
    },
    {
        "id": "6550",
        "idPai": "6000",
        "idLink": "6550-operacoes-com-bens-de-ativo-imobilizado-e-materiais-para-uso-ou-consumo",
        "titulo": "6550 - Operações com bens de ativo imobilizado e materiais para uso ou consumo"
    },
    {
        "id": "6600",
        "idPai": "6000",
        "idLink": "6600-creditos-e-ressarcimentos-de-icms",
        "titulo": "6600 - Créditos e ressarcimentos de ICMS"
    },
    {
        "id": "6650",
        "idPai": "6000",
        "idLink": "6650-saidas-de-combustiveis-derivados-ou-nao-de-petroleo-e-lubrificantes",
        "titulo": "6650 - Saídas de combustíveis, derivados ou não de petróleo e lubrificantes"
    },
    {
        "id": "6900",
        "idPai": "6000",
        "idLink": "6900-outras-saidas-de-mercadorias-ou-prestacoes-de-servicos",
        "titulo": "6900 - Outras saídas de mercadorias ou prestações de serviços"
    },
    {
        "id": "6101",
        "idPai": "6100",
        "idLink": "6101-venda-de-producao-do-estabelecimento",
        "titulo": "6101 - Venda de produção do estabelecimento",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento. Também serão classificadas neste código as vendas de mercadorias por estabelecimento industrial de cooperativa destinadas a seus cooperados ou a estabelecimento de outra cooperativa."
    },
    {
        "id": "6102",
        "idPai": "6100",
        "idLink": "6102-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "6102 - Venda de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial no estabelecimento. Também serão classificadas neste código as vendas de mercadorias por estabelecimento comercial de cooperativa destinadas a seus cooperados ou estabelecimento de outra cooperativa."
    },
    {
        "id": "6103",
        "idPai": "6100",
        "idLink": "6103-venda-de-producao-do-estabelecimento-efetuada-fora-do-estabelecimento",
        "titulo": "6103 - Venda de produção do estabelecimento, efetuada fora do estabelecimento",
        "descricao": "Classificam-se neste código as vendas efetuadas fora do estabelecimento, inclusive por meio de veículo, de produtos industrializados no estabelecimento."
    },
    {
        "id": "6104",
        "idPai": "6100",
        "idLink": "6104-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-efetuada-fora-do-estabelecimento",
        "titulo": "6104 - Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento",
        "descricao": "Classificam-se neste código as vendas efetuadas fora do estabelecimento, inclusive por meio de veículo, de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial no estabelecimento."
    },
    {
        "id": "6105",
        "idPai": "6100",
        "idLink": "6105-venda-de-producao-do-estabelecimento-que-nao-deva-por-ele-transitar",
        "titulo": "6105 - Venda de produção do estabelecimento que não deva por ele transitar",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento, armazenados em depósito fechado, armazém geral ou outro sem que haja retorno ao estabelecimento depositante."
    },
    {
        "id": "6106",
        "idPai": "6100",
        "idLink": "6106-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-que-nao-deva-por-ele-transitar",
        "titulo": "6106 - Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, armazenadas em depósito fechado, armazém geral ou outro, que não tenham sido objeto de qualquer processo industrial no estabelecimento sem que haja retorno ao estabelecimento depositante. Também serão classificadas neste código as vendas de mercadorias importadas, cuja saída ocorra do recinto alfandegado ou da repartição alfandegária onde se processou o desembaraço aduaneiro, com destino ao estabelecimento do comprador, sem transitar pelo estabelecimento do importador."
    },
    {
        "id": "6107",
        "idPai": "6100",
        "idLink": "6107-venda-de-producao-do-estabelecimento-destinada-a-nao-contribuinte",
        "titulo": "6107 - Venda de produção do estabelecimento, destinada a não contribuinte",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento, destinadas a não contribuintes. Quaisquer operações de venda destinadas a não contribuintes deverão ser classificadas neste código."
    },
    {
        "id": "6108",
        "idPai": "6100",
        "idLink": "6108-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-destinada-a-nao-contribuinte",
        "titulo": "6108 - Venda de mercadoria adquirida ou recebida de terceiros, destinada a não contribuinte",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial no estabelecimento, destinadas a não contribuintes. Quaisquer operações de venda destinadas a não contribuintes deverão ser classificadas neste código."
    },
    {
        "id": "6109",
        "idPai": "6100",
        "idLink": "6109-venda-de-producao-do-estabelecimento-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "6109 - Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados pelo estabelecimento, destinados à Zona Franca de Manaus ou Áreas de Livre Comércio."
    },
    {
        "id": "6110",
        "idPai": "6100",
        "idLink": "6110-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-destinada-a-zona-franca-de-manaus-ou-areas-de-livre-comercio",
        "titulo": "6110 - Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, destinadas à Zona Franca de Manaus ou Áreas de Livre Comércio."
    },
    {
        "id": "6111",
        "idPai": "6100",
        "idLink": "6111-venda-de-producao-do-estabelecimento-remetida-anteriormente-em-consignacao-industrial",
        "titulo": "6111 - Venda de produção do estabelecimento remetida anteriormente em consignação industrial",
        "descricao": "Classificam-se neste código as vendas efetivas de produtos industrializados no estabelecimento remetidos anteriormente a título de consignação industrial."
    },
    {
        "id": "6112",
        "idPai": "6100",
        "idLink": "6112-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-anteriormente-em-consignacao-industrial",
        "titulo": "6112 - Venda de mercadoria adquirida ou recebida de Terceiros remetida anteriormente em consignação industrial",
        "descricao": "Classificam-se neste código as vendas efetivas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas anteriormente a título de consignação industrial."
    },
    {
        "id": "6113",
        "idPai": "6100",
        "idLink": "6113-venda-de-producao-do-estabelecimento-remetida-anteriormente-em-consignacao-mercantil",
        "titulo": "6113 - Venda de produção do estabelecimento remetida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as vendas efetivas de produtos industrializados no estabelecimento remetidos anteriormente a título de consignação mercantil."
    },
    {
        "id": "6114",
        "idPai": "6100",
        "idLink": "6114-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-anteriormente-em-consignacao-mercantil",
        "titulo": "6114 - Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as vendas efetivas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas anteriormente a título de consignação mercantil."
    },
    {
        "id": "6115",
        "idPai": "6100",
        "idLink": "6115-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-recebida-anteriormente-em-consignacao-mercantil",
        "titulo": "6115 - Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, recebidas anteriormente a título de consignação mercantil."
    },
    {
        "id": "6116",
        "idPai": "6100",
        "idLink": "6116-venda-de-producao-do-estabelecimento-originada-de-encomenda-para-entrega-futura",
        "titulo": "6116 - Venda de produção do estabelecimento originada de encomenda para entrega futura",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados pelo estabelecimento, quando da saída real do produto, cujo faturamento tenha sido classificado no código \"6.922 – Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\"."
    },
    {
        "id": "6117",
        "idPai": "6100",
        "idLink": "6117-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-originada-de-encomenda-para-entrega-futura",
        "titulo": "6117 - Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, quando da saída real da mercadoria, cujo faturamento tenha sido classificado no código \"6.922 – Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\"."
    },
    {
        "id": "6118",
        "idPai": "6100",
        "idLink": "6118-venda-de-producao-do-estabelecimento-entregue-ao-destinatario-por-conta-e-ordem-do-adquirente-originario-em-venda-a-ordem",
        "titulo": "6118 - Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
        "descricao": "Classificam-se neste código as vendas à ordem de produtos industrializados pelo estabelecimento, entregues ao destinatário por conta e ordem do adquirente originário."
    },
    {
        "id": "6119",
        "idPai": "6100",
        "idLink": "6119-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-entregue-ao-destinatario-por-conta-e-ordem-do-adquirente-originario-em-venda-a-ordem",
        "titulo": "6119 - Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
        "descricao": "Classificam-se neste código as vendas à ordem de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, entregues ao destinatário por conta e ordem do adquirente originário."
    },
    {
        "id": "6120",
        "idPai": "6100",
        "idLink": "6120-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-entregue-ao-destinatario-pelo-vendedor-remetente-em-venda-a-ordem",
        "titulo": "6120 - Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem",
        "descricao": "Classificam-se neste código as vendas à ordem de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, entregues pelo vendedor remetente ao destinatário, cuja compra seja classificada, pelo adquirente originário, no código \"2.118 – Compra de mercadoria pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem\"."
    },
    {
        "id": "6122",
        "idPai": "6100",
        "idLink": "6122-venda-de-producao-do-estabelecimento-remetida-para-industrializacao-por-conta-e-ordem-do-adquirente-sem-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "6122 - Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento, remetidos para serem industrializados em outro estabelecimento, por conta e ordem do adquirente, sem que os produtos tenham transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "6123",
        "idPai": "6100",
        "idLink": "6123-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-remetida-para-industrializacao-por-conta-e-ordem-do-adquirente-sem-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "6123 - Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas para serem industrializadas em outro estabelecimento, por conta e ordem do adquirente, sem que as mercadorias tenham transitado pelo estabelecimento do adquirente."
    },
    {
        "id": "6124",
        "idPai": "6100",
        "idLink": "6124-industrializacao-efetuada-para-outra-empresa",
        "titulo": "6124 - Industrialização efetuada para outra empresa",
        "descricao": "Classificam-se neste código as saídas de mercadorias industrializadas para terceiros, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial."
    },
    {
        "id": "6125",
        "idPai": "6100",
        "idLink": "6125-industrializacao-efetuada-para-outra-empresa-quando-a-mercadoria-recebida-para-utilizacao-no-processo-de-industrializacao-nao-transitar-pelo-estabelecimento-adquirente-da-mercadoria",
        "titulo": "6125 - Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria",
        "descricao": "Classificam-se neste código as saídas de mercadorias industrializadas para outras empresas, em que as mercadorias recebidas para utilização no processo de industrialização não tenham transitado pelo estabelecimento do adquirente das mercadorias, compreendendo os valores referentes aos serviços prestados e os das mercadorias de propriedade do industrializador empregadas no processo industrial."
    },
    {
        "id": "6151",
        "idPai": "6150",
        "idLink": "6151-transferencia-de-producao-do-estabelecimento",
        "titulo": "6151 - Transferência de produção do estabelecimento",
        "descricao": "Classificam-se neste código os produtos industrializados no estabelecimento e transferidos para outro estabelecimento da mesma empresa."
    },
    {
        "id": "6152",
        "idPai": "6150",
        "idLink": "6152-transferencia-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "6152 - Transferência de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização e que não tenham sido objeto de qualquer processo industrial no estabelecimento, transferidas para outro estabelecimento da mesma empresa."
    },
    {
        "id": "6153",
        "idPai": "6150",
        "idLink": "6153-transferencia-de-energia-eletrica",
        "titulo": "6153 - Transferência de energia elétrica",
        "descricao": "Classificam-se neste código as transferências de energia elétrica para outro estabelecimento da mesma empresa, para distribuição."
    },
    {
        "id": "6155",
        "idPai": "6150",
        "idLink": "6155-transferencia-de-producao-do-estabelecimento-que-nao-deva-por-ele-transitar",
        "titulo": "6155 - Transferência de produção do estabelecimento, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as transferências para outro estabelecimento da mesma empresa, de produtos industrializados no estabelecimento que tenham sido remetidos para armazém geral, depósito fechado ou outro, sem que haja retorno ao estabelecimento depositante."
    },
    {
        "id": "6156",
        "idPai": "6150",
        "idLink": "6156-transferencia-de-mercadoria-adquirida-ou-recebida-de-terceiros-que-nao-deva-por-ele-transitar",
        "titulo": "6156 - Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as transferências para outro estabelecimento da mesma empresa, de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial, remetidas para armazém geral, depósito fechado ou outro, sem que haja retorno ao estabelecimento depositante."
    },
    {
        "id": "6201",
        "idPai": "6200",
        "idLink": "6201-devolucao-de-compra-para-industrializacao",
        "titulo": "6201 - Devolução de compra para industrialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem utilizadas em processo de industrialização, cujas entradas tenham sido classificadas como “Compra para industrialização”."
    },
    {
        "id": "6202",
        "idPai": "6200",
        "idLink": "6202-devolucao-de-compra-para-comercializacao",
        "titulo": "6202 - Devolução de compra para comercialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem comercializadas, cujas entradas tenham sido classificadas como “Compra para comercialização”."
    },
    {
        "id": "6205",
        "idPai": "6200",
        "idLink": "6205-anulacao-de-valor-relativo-a-aquisicao-de-servico-de-comunicacao",
        "titulo": "6205 - Anulação de valor relativo a aquisição de serviço de comunicação",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes das aquisições de serviços de comunicação."
    },
    {
        "id": "6206",
        "idPai": "6200",
        "idLink": "6206-anulacao-de-valor-relativo-a-aquisicao-de-servico-de-transporte",
        "titulo": "6206 - Anulação de valor relativo a aquisição de serviço de transporte",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes das aquisições de serviços de transporte."
    },
    {
        "id": "6207",
        "idPai": "6200",
        "idLink": "6207-anulacao-de-valor-relativo-a-compra-de-energia-eletrica",
        "titulo": "6207 - Anulação de valor relativo à compra de energia elétrica",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes da compra de energia elétrica."
    },
    {
        "id": "6208",
        "idPai": "6200",
        "idLink": "6208-devolucao-de-mercadoria-recebida-em-transferencia-para-industrializacao",
        "titulo": "6208 - Devolução de mercadoria recebida em transferência para industrialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias recebidas em transferência de outros estabelecimentos da mesma empresa, para serem utilizadas em processo de industrialização."
    },
    {
        "id": "6209",
        "idPai": "6200",
        "idLink": "6209-devolucao-de-mercadoria-recebida-em-transferencia-para-comercializacao",
        "titulo": "6209 - Devolução de mercadoria recebida em transferência para comercialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias recebidas em transferência de outro estabelecimento da mesma empresa, para serem comercializadas."
    },
    {
        "id": "6210",
        "idPai": "6200",
        "idLink": "6210-devolucao-de-compra-para-utilizacao-na-prestacao-de-servico",
        "titulo": "6210 - Devolução de compra para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para utilização na prestação de serviços, cujas entradas tenham sido classificadas no código “2.126 - Compra para utilização na prestação de serviço”."
    },
    {
        "id": "6251",
        "idPai": "6250",
        "idLink": "6251-venda-de-energia-eletrica-para-distribuicao-ou-comercializacao",
        "titulo": "6251 - Venda de energia elétrica para distribuição ou comercialização",
        "descricao": "Classificam-se neste código as vendas de energia elétrica destinada à distribuição ou comercialização. Também serão classificadas neste código as vendas de energia elétrica destinada a cooperativas para distribuição aos seus cooperados."
    },
    {
        "id": "6252",
        "idPai": "6250",
        "idLink": "6252-venda-de-energia-eletrica-para-estabelecimento-industrial",
        "titulo": "6252 - Venda de energia elétrica para estabelecimento industrial",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento industrial. Também serão classificadas neste código as vendas de energia elétrica destinada a estabelecimento industrial de cooperativa."
    },
    {
        "id": "6253",
        "idPai": "6250",
        "idLink": "6253-venda-de-energia-eletrica-para-estabelecimento-comercial",
        "titulo": "6253 - Venda de energia elétrica para estabelecimento comercial",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento comercial. Também serão classificadas neste código as vendas de energia elétrica destinada a estabelecimento comercial de cooperativa."
    },
    {
        "id": "6254",
        "idPai": "6250",
        "idLink": "6254-venda-de-energia-eletrica-para-estabelecimento-prestador-de-servico-de-transporte",
        "titulo": "6254 - Venda de energia elétrica para estabelecimento prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento de prestador de serviços de transporte."
    },
    {
        "id": "6255",
        "idPai": "6250",
        "idLink": "6255-venda-de-energia-eletrica-para-estabelecimento-prestador-de-servico-de-comunicacao",
        "titulo": "6255 - Venda de energia elétrica para estabelecimento prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento de prestador de serviços de comunicação."
    },
    {
        "id": "6256",
        "idPai": "6250",
        "idLink": "6256-venda-de-energia-eletrica-para-estabelecimento-de-produtor-rural",
        "titulo": "6256 - Venda de energia elétrica para estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por estabelecimento de produtor rural."
    },
    {
        "id": "6257",
        "idPai": "6250",
        "idLink": "6257-venda-de-energia-eletrica-para-consumo-por-demanda-contratada",
        "titulo": "6257 - Venda de energia elétrica para consumo por demanda contratada",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para consumo por demanda contratada, que prevalecerá sobre os demais códigos deste subgrupo."
    },
    {
        "id": "6258",
        "idPai": "6250",
        "idLink": "6258-venda-de-energia-eletrica-a-nao-contribuinte",
        "titulo": "6258 - Venda de energia elétrica a não contribuinte",
        "descricao": "Classificam-se neste código as vendas de energia elétrica a pessoas físicas ou a pessoas jurídicas não indicadas nos códigos anteriores."
    },
    {
        "id": "6301",
        "idPai": "6300",
        "idLink": "6301-prestacao-de-servico-de-comunicacao-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "6301 - Prestação de serviço de comunicação para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação destinados às prestações de serviços da mesma natureza."
    },
    {
        "id": "6302",
        "idPai": "6300",
        "idLink": "6302-prestacao-de-servico-de-comunicacao-a-estabelecimento-industrial",
        "titulo": "6302 - Prestação de serviço de comunicação a estabelecimento industrial",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento industrial. Também serão classificados neste código os serviços de comunicação prestados a estabelecimento industrial de cooperativa."
    },
    {
        "id": "6303",
        "idPai": "6300",
        "idLink": "6303-prestacao-de-servico-de-comunicacao-a-estabelecimento-comercial",
        "titulo": "6303 - Prestação de serviço de comunicação a estabelecimento comercial",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento comercial. Também serão classificados neste código os serviços de comunicação prestados a estabelecimento comercial de cooperativa."
    },
    {
        "id": "6304",
        "idPai": "6300",
        "idLink": "6304-prestacao-de-servico-de-comunicacao-a-estabelecimento-de-prestador-de-servico-de-transporte",
        "titulo": "6304 - Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento prestador de serviço de transporte."
    },
    {
        "id": "6305",
        "idPai": "6300",
        "idLink": "6305-prestacao-de-servico-de-comunicacao-a-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "6305 - Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "6306",
        "idPai": "6300",
        "idLink": "6306-prestacao-de-servico-de-comunicacao-a-estabelecimento-de-produtor-rural",
        "titulo": "6306 - Prestação de serviço de comunicação a estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a estabelecimento de produtor rural."
    },
    {
        "id": "6307",
        "idPai": "6300",
        "idLink": "6307-prestacao-de-servico-de-comunicacao-a-nao-contribuinte",
        "titulo": "6307 - Prestação de serviço de comunicação a não contribuinte",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação a pessoas físicas ou a pessoas jurídicas não indicadas nos códigos anteriores."
    },
    {
        "id": "6351",
        "idPai": "6350",
        "idLink": "6351-prestacao-de-servico-de-transporte-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "6351 - Prestação de serviço de transporte para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte destinados às prestações de serviços da mesma natureza."
    },
    {
        "id": "6352",
        "idPai": "6350",
        "idLink": "6352-prestacao-de-servico-de-transporte-a-estabelecimento-industrial",
        "titulo": "6352 - Prestação de serviço de transporte a estabelecimento industrial",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento industrial. Também serão classificados neste código os serviços de transporte prestados a estabelecimento industrial de cooperativa."
    },
    {
        "id": "6353",
        "idPai": "6350",
        "idLink": "6353-prestacao-de-servico-de-transporte-a-estabelecimento-comercial",
        "titulo": "6353 - Prestação de serviço de transporte a estabelecimento comercial",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento comercial. Também serão classificados neste código os serviços de transporte prestados a estabelecimento comercial de cooperativa."
    },
    {
        "id": "6354",
        "idPai": "6350",
        "idLink": "6354-prestacao-de-servico-de-transporte-a-estabelecimento-de-prestador-de-servico-de-comunicacao",
        "titulo": "6354 - Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento prestador de serviços de comunicação."
    },
    {
        "id": "6355",
        "idPai": "6350",
        "idLink": "6355-prestacao-de-servico-de-transporte-a-estabelecimento-de-geradora-ou-de-distribuidora-de-energia-eletrica",
        "titulo": "6355 - Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica."
    },
    {
        "id": "6356",
        "idPai": "6350",
        "idLink": "6356-prestacao-de-servico-de-transporte-a-estabelecimento-de-produtor-rural",
        "titulo": "6356 - Prestação de serviço de transporte a estabelecimento de produtor rural",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a estabelecimento de produtor rural."
    },
    {
        "id": "6357",
        "idPai": "6350",
        "idLink": "6357-prestacao-de-servico-de-transporte-a-nao-contribuinte",
        "titulo": "6357 - Prestação de serviço de transporte a não contribuinte",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a pessoas físicas ou a pessoas jurídicas não indicadas nos códigos anteriores."
    },
    {
        "id": "6359",
        "idPai": "6350",
        "idLink": "6359-prestacao-de-servico-de-transporte-a-contribuinte-ou-a-nao-contribuinte-quando-a-mercadoria-transportada-esta-dispensada-de-emissao-de-nota-fiscal",
        "titulo": "6359 - Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal.",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte a contribuintes ou a não contribuintes, exclusivamente quando não existe a obrigação legal de emissão de nota fiscal para a mercadoria transportada."
    },
    {
        "id": "6401",
        "idPai": "6400",
        "idLink": "6401-venda-de-producao-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria-na-condicao-de-contribuinte-substituto",
        "titulo": "6401 - Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento em operações com produtos sujeitos ao regime de substituição tributária, na condição de contribuinte substituto. Também serão classificadas neste código as vendas de produtos industrializados por estabelecimento industrial de cooperativa sujeitos ao regime de substituição tributária, na condição de contribuinte substituto."
    },
    {
        "id": "6402",
        "idPai": "6400",
        "idLink": "6402-venda-de-producao-do-estabelecimento-de-produto-sujeito-ao-regime-de-substituicao-tributaria-em-operacao-entre-contribuintes-substitutos-do-mesmo-produto",
        "titulo": "6402 - Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto",
        "descricao": "Classificam-se neste código as vendas de produtos sujeitos ao regime de substituição tributária industrializados no estabelecimento, em operações entre contribuintes substitutos do mesmo produto."
    },
    {
        "id": "6403",
        "idPai": "6400",
        "idLink": "6403-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria-na-condicao-de-contribuinte-substituto",
        "titulo": "6403 - Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituto",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, na condição de contribuinte substituto, em operação com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "6404",
        "idPai": "6400",
        "idLink": "6404-venda-de-mercadoria-sujeita-ao-regime-de-substituicao-tributaria-cujo-imposto-ja-tenha-sido-retido-anteriormente",
        "titulo": "6404 - Venda de mercadoria sujeita ao regime de substituição tributária, cujo imposto já tenha sido retido anteriormente",
        "descricao": "Classificam-se neste código as vendas de mercadorias sujeitas ao regime de substituição tributária, na condição de substituto tributário, exclusivamente nas hipóteses em que o imposto já tenha sido retido anteriormente."
    },
    {
        "id": "6408",
        "idPai": "6400",
        "idLink": "6408-transferencia-de-producao-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "6408 - Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código os produtos industrializados no estabelecimento e transferidos para outro estabelecimento da mesma empresa, em operações com produtos sujeitos ao regime de substituição tributária."
    },
    {
        "id": "6409",
        "idPai": "6400",
        "idLink": "6409-transferencia-de-mercadoria-adquirida-ou-recebida-de-terceiros-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "6409 - Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as transferências para outro estabelecimento da mesma empresa, de mercadorias adquiridas ou recebidas de terceiros que não tenham sido objeto de qualquer processo industrial no estabelecimento, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "6410",
        "idPai": "6400",
        "idLink": "6410-devolucao-de-compra-para-industrializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "6410 - Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem utilizadas em processo de industrialização cujas entradas tenham sido classificadas como \"Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "6411",
        "idPai": "6400",
        "idLink": "6411-devolucao-de-compra-para-comercializacao-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "6411 - Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem comercializadas, cujas entradas tenham sido classificadas como “Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária”."
    },
    {
        "id": "6412",
        "idPai": "6400",
        "idLink": "6412-devolucao-de-bem-do-ativo-imobilizado-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "6412 - Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de bens adquiridos para integrar o ativo imobilizado do estabelecimento, cuja entrada tenha sido classificada no código \"2.406 – Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "6413",
        "idPai": "6400",
        "idLink": "6413-devolucao-de-mercadoria-destinada-ao-uso-ou-consumo-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "6413 - Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para uso ou consumo do estabelecimento, cuja entrada tenha sido classificada no código \"2.407 – Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária\"."
    },
    {
        "id": "6414",
        "idPai": "6400",
        "idLink": "6414-remessa-de-producao-do-estabelecimento-para-venda-fora-do-estabelecimento-em-operacao-com-produto-sujeito-ao-regime-de-substituicao-tributaria",
        "titulo": "6414 - Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as remessas de produtos industrializados pelo estabelecimento para serem vendidos fora do estabelecimento, inclusive por meio de veículos, em operações com produtos sujeitos ao regime de substituição tributária."
    },
    {
        "id": "6415",
        "idPai": "6400",
        "idLink": "6415-remessa-de-mercadoria-adquirida-ou-recebida-de-terceiros-para-venda-fora-do-estabelecimento-em-operacao-com-mercadoria-sujeita-ao-regime-de-substituicao-tributaria",
        "titulo": "6415 - Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária",
        "descricao": "Classificam-se neste código as remessas de mercadorias adquiridas ou recebidas de terceiros para serem vendidas fora do estabelecimento, inclusive por meio de veículos, em operações com mercadorias sujeitas ao regime de substituição tributária."
    },
    {
        "id": "6501",
        "idPai": "6500",
        "idLink": "6501-remessa-de-producao-do-estabelecimento-com-fim-especifico-de-exportacao",
        "titulo": "6501 - Remessa de produção do estabelecimento, com fim específico de exportação",
        "descricao": "Classificam-se neste código as saídas de produtos industrializados pelo estabelecimento, remetidos com fim específico de exportação a trading company, empresa comercial exportadora ou outro estabelecimento do remetente."
    },
    {
        "id": "6502",
        "idPai": "6500",
        "idLink": "6502-remessa-de-mercadoria-adquirida-ou-recebida-de-terceiros-com-fim-especifico-de-exportacao",
        "titulo": "6502 - Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação",
        "descricao": "Classificam-se neste código as saídas de mercadorias adquiridas ou recebidas de terceiros, remetidas com fim específico de exportação a trading company, empresa comercial exportadora ou outro estabelecimento do remetente."
    },
    {
        "id": "6503",
        "idPai": "6500",
        "idLink": "6503-devolucao-de-mercadoria-recebida-com-fim-especifico-de-exportacao",
        "titulo": "6503 - Devolução de mercadoria recebida com fim específico de exportação",
        "descricao": "Classificam-se neste código as devoluções efetuadas por trading company, empresa comercial exportadora ou outro estabelecimento do destinatário, de mercadorias recebidas com fim específico de exportação, cujas entradas tenham sido classificadas no código \"2.501 – Entrada de mercadoria recebida com fim específico de exportação\"."
    },
    {
        "id": "6504",
        "idPai": "6500",
        "idLink": "6504-remessa-de-mercadorias-para-formacao-de-lote-de-exportacao-de-produtos-industrializados-ou-produzidos-pelo-proprio-estabelecimento",
        "titulo": "6504 - Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
        "descricao": "Classificam-se neste código as remessas de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento."
    },
    {
        "id": "6505",
        "idPai": "6500",
        "idLink": "6505-remessa-de-mercadorias-adquiridas-ou-recebidas-de-terceiros-para-formacao-de-lote-de-exportacao",
        "titulo": "6505 - Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação.",
        "descricao": "Classificam-se neste código as remessas de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação."
    },
    {
        "id": "6551",
        "idPai": "6550",
        "idLink": "6551-venda-de-bem-do-ativo-imobilizado",
        "titulo": "6551 - Venda de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as vendas de bens integrantes do ativo imobilizado do estabelecimento."
    },
    {
        "id": "6552",
        "idPai": "6550",
        "idLink": "6552-transferencia-de-bem-do-ativo-imobilizado",
        "titulo": "6552 - Transferência de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código os bens do ativo imobilizado transferidos para outro estabelecimento da mesma empresa."
    },
    {
        "id": "6553",
        "idPai": "6550",
        "idLink": "6553-devolucao-de-compra-de-bem-para-o-ativo-imobilizado",
        "titulo": "6553 - Devolução de compra de bem para o ativo imobilizado",
        "descricao": "Classificam-se neste código as devoluções de bens adquiridos para integrar o ativo imobilizado do estabelecimento, cuja entrada foi classificada no código “2.551 - Compra de bem para o ativo imobilizado”."
    },
    {
        "id": "6554",
        "idPai": "6550",
        "idLink": "6554-remessa-de-bem-do-ativo-imobilizado-para-uso-fora-do-estabelecimento",
        "titulo": "6554 - Remessa de bem do ativo imobilizado para uso fora do estabelecimento",
        "descricao": "Classificam-se neste código as remessas de bens do ativo imobilizado para uso fora do estabelecimento."
    },
    {
        "id": "6555",
        "idPai": "6550",
        "idLink": "6555-devolucao-de-bem-do-ativo-imobilizado-de-terceiro-recebido-para-uso-no-estabelecimento",
        "titulo": "6555 - Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento",
        "descricao": "Classificam-se neste código as saídas em devolução, de bens do ativo imobilizado de terceiros, recebidos para uso no estabelecimento, cuja entrada tenha sido classificada no código \"2.555 – Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento\"."
    },
    {
        "id": "6556",
        "idPai": "6550",
        "idLink": "6556-devolucao-de-compra-de-material-de-uso-ou-consumo",
        "titulo": "6556 - Devolução de compra de material de uso ou consumo",
        "descricao": "Classificam-se neste código as devoluções de mercadorias destinadas ao uso ou consumo do estabelecimento, cuja entrada tenha sido classificada no código “2.556 - Compra de material para uso ou consumo”."
    },
    {
        "id": "6557",
        "idPai": "6550",
        "idLink": "6557-transferencia-de-material-de-uso-ou-consumo",
        "titulo": "6557 - Transferência de material de uso ou consumo",
        "descricao": "Classificam-se neste código os materiais de uso ou consumo transferidos para outro estabelecimento da mesma empresa."
    },
    {
        "id": "6603",
        "idPai": "6600",
        "idLink": "6603-ressarcimento-de-icms-retido-por-substituicao-tributaria",
        "titulo": "6603 - Ressarcimento de ICMS retido por substituição tributária",
        "descricao": "Classificam-se neste código os lançamentos destinados ao registro de ressarcimento de ICMS retido por substituição tributária a contribuinte substituído, efetuado pelo contribuinte substituto, nas hipóteses previstas na legislação aplicável."
    },
    {
        "id": "6651",
        "idPai": "6650",
        "idLink": "6651-venda-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento-destinado-a-industrializacao-subsequeente",
        "titulo": "6651 - Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes industrializados no estabelecimento destinados à industrialização do próprio produto, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 6.922 – “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "6652",
        "idPai": "6650",
        "idLink": "6652-venda-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento-destinado-a-comercializacao",
        "titulo": "6652 - Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes industrializados no estabelecimento destinados à comercialização, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 6.922 – “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "6653",
        "idPai": "6650",
        "idLink": "6653-venda-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento-destinado-a-consumidor-ou-usuario-final",
        "titulo": "6653 - Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes industrializados no estabelecimento destinados a consumo em processo de industrialização de outros produtos, à prestação de serviços ou a usuário final, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 6.922 – “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "6654",
        "idPai": "6650",
        "idLink": "6654-venda-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-destinado-a-industrializacao-subsequeente",
        "titulo": "6654 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente",
        "descricao": "Classificam-se neste código as vendas de  combustíveis ou lubrificantes adquiridos ou recebidos de terceiros destinados à industrialização do próprio produto, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 – “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "6655",
        "idPai": "6650",
        "idLink": "6655-venda-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-destinado-a-comercializacao",
        "titulo": "6655 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização",
        "descricao": "Classificam-se neste código as vendas de  combustíveis ou lubrificantes adquiridos ou recebidos de terceiros destinados à comercialização, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 – “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "6656",
        "idPai": "6650",
        "idLink": "6656-venda-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-destinado-a-consumidor-ou-usuario-final",
        "titulo": "6656 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final",
        "descricao": "Classificam-se neste código as vendas de  combustíveis ou lubrificantes adquiridos ou recebidos de terceiros destinados a consumo em processo de industrialização de outros produtos, à prestação de serviços ou a usuário final, inclusive aquelas decorrentes de encomenda para entrega futura, cujo faturamento tenha sido classificado no código 5.922 – “Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura”."
    },
    {
        "id": "6657",
        "idPai": "6650",
        "idLink": "6657-remessa-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros-para-venda-fora-do-estabelecimento",
        "titulo": "6657 - Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento",
        "descricao": "Classificam-se neste código as remessas de combustíveis ou lubrificante, adquiridos ou recebidos de terceiros para serem vendidos fora do estabelecimento, inclusive por meio de veículos."
    },
    {
        "id": "6658",
        "idPai": "6650",
        "idLink": "6658-transferencia-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento",
        "titulo": "6658 - Transferência de combustível ou lubrificante de produção do estabelecimento",
        "descricao": "Classificam-se neste código as transferências de combustíveis ou lubrificantes, industrializados no estabelecimento, para outro estabelecimento da mesma empresa."
    },
    {
        "id": "6659",
        "idPai": "6650",
        "idLink": "6659-transferencia-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiro",
        "titulo": "6659 - Transferência de combustível ou lubrificante adquirido ou recebido de terceiro",
        "descricao": "Classificam-se neste código as transferências de combustíveis ou lubrificantes, adquiridos ou recebidos de terceiros, para outro estabelecimento da mesma empresa."
    },
    {
        "id": "6660",
        "idPai": "6650",
        "idLink": "6660-devolucao-de-compra-de-combustivel-ou-lubrificante-adquirido-para-industrializacao-subsequeente",
        "titulo": "6660 - Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente",
        "descricao": "Classificam-se neste código as devoluções de compras de combustíveis ou lubrificantes adquiridos para industrialização do próprio produto, cujas entradas tenham sido classificadas como “Compra de combustível ou lubrificante para industrialização subseqüente”."
    },
    {
        "id": "6661",
        "idPai": "6650",
        "idLink": "6661-devolucao-de-compra-de-combustivel-ou-lubrificante-adquirido-para-comercializacao",
        "titulo": "6661 - Devolução de compra de combustível ou lubrificante adquirido para comercialização",
        "descricao": "Classificam-se neste código as devoluções de compras de combustíveis ou lubrificantes adquiridos para comercialização, cujas entradas tenham sido classificadas como “Compra de combustível ou lubrificante para comercialização”."
    },
    {
        "id": "6662",
        "idPai": "6650",
        "idLink": "6662-devolucao-de-compra-de-combustivel-ou-lubrificante-adquirido-por-consumidor-ou-usuario-final",
        "titulo": "6662 - Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final",
        "descricao": "Classificam-se neste código as devoluções de compras de combustíveis ou lubrificantes adquiridos para consumo em processo de industrialização de outros produtos, na prestação de serviços ou por usuário final, cujas entradas tenham sido classificadas como “Compra de combustível ou lubrificante por consumidor ou usuário final”."
    },
    {
        "id": "6663",
        "idPai": "6650",
        "idLink": "6663-remessa-para-armazenagem-de-combustivel-ou-lubrificante",
        "titulo": "6663 - Remessa para armazenagem de combustível ou lubrificante",
        "descricao": "Classificam-se neste código as remessas para armazenagem de combustíveis ou lubrificantes."
    },
    {
        "id": "6664",
        "idPai": "6650",
        "idLink": "6664-retorno-de-combustivel-ou-lubrificante-recebido-para-armazenagem",
        "titulo": "6664 - Retorno de combustível ou lubrificante recebido para armazenagem",
        "descricao": "Classificam-se neste código as remessas em devolução de combustíveis ou lubrificantes, recebidos para armazenagem."
    },
    {
        "id": "6665",
        "idPai": "6650",
        "idLink": "6665-retorno-simbolico-de-combustivel-ou-lubrificante-recebido-para-armazenagem",
        "titulo": "6665 - Retorno simbólico de combustível ou lubrificante recebido para armazenagem",
        "descricao": "Classificam-se neste código os retornos simbólicos de combustíveis ou lubrificantes recebidos para armazenagem, quando as mercadorias armazenadas tenham sido objeto de saída a qualquer título e não devam retornar ao estabelecimento depositante."
    },
    {
        "id": "6666",
        "idPai": "6650",
        "idLink": "6666-remessa-por-conta-e-ordem-de-terceiros-de-combustivel-ou-lubrificante-recebido-para-armazenagem",
        "titulo": "6666 - Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem",
        "descricao": "Classificam-se neste código as saídas por conta e ordem de terceiros, de combustíveis ou lubrificantes, recebidos anteriormente para armazenagem."
    },
    {
        "id": "6901",
        "idPai": "6900",
        "idLink": "6901-remessa-para-industrializacao-por-encomenda",
        "titulo": "6901 - Remessa para industrialização por encomenda",
        "descricao": "Classificam-se neste código as remessas de insumos remetidos para industrialização por encomenda, a ser realizada em outra empresa ou em outro estabelecimento da mesma empresa."
    },
    {
        "id": "6902",
        "idPai": "6900",
        "idLink": "6902-retorno-de-mercadoria-utilizada-na-industrializacao-por-encomenda",
        "titulo": "6902 - Retorno de mercadoria utilizada na industrialização por encomenda",
        "descricao": "Classificam-se neste código as remessas, pelo estabelecimento industrializador, dos insumos recebidos para industrialização e incorporados ao produto final, por encomenda de outra empresa ou de outro estabelecimento da mesma empresa. O valor dos insumos nesta operação deverá ser igual ao valor dos insumos recebidos para industrialização."
    },
    {
        "id": "6903",
        "idPai": "6900",
        "idLink": "6903-retorno-de-mercadoria-recebida-para-industrializacao-e-nao-aplicada-no-referido-processo",
        "titulo": "6903 - Retorno de mercadoria recebida para industrialização e não aplicada no referido processo",
        "descricao": "Classificam-se neste código as remessas em devolução de insumos recebidos para industrialização e não aplicados no referido processo."
    },
    {
        "id": "6904",
        "idPai": "6900",
        "idLink": "6904-remessa-para-venda-fora-do-estabelecimento",
        "titulo": "6904 - Remessa para venda fora do estabelecimento",
        "descricao": "Classificam-se neste código as remessas de mercadorias para venda fora do estabelecimento, inclusive por meio de veículos."
    },
    {
        "id": "6905",
        "idPai": "6900",
        "idLink": "6905-remessa-para-deposito-fechado-ou-armazem-geral",
        "titulo": "6905 - Remessa para depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código as remessas de mercadorias para depósito em depósito fechado ou armazém geral."
    },
    {
        "id": "6906",
        "idPai": "6900",
        "idLink": "6906-retorno-de-mercadoria-depositada-em-deposito-fechado-ou-armazem-geral",
        "titulo": "6906 - Retorno de mercadoria depositada em depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código os retornos de mercadorias depositadas em depósito fechado ou armazém geral ao estabelecimento depositante."
    },
    {
        "id": "6907",
        "idPai": "6900",
        "idLink": "6907-retorno-simbolico-de-mercadoria-depositada-em-deposito-fechado-ou-armazem-geral",
        "titulo": "6907 - Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral",
        "descricao": "Classificam-se neste código os retornos simbólicos de mercadorias recebidas para depósito em depósito fechado ou armazém geral, quando as mercadorias depositadas tenham sido objeto de saída a qualquer título e que não devam retornar ao estabelecimento depositante."
    },
    {
        "id": "6908",
        "idPai": "6900",
        "idLink": "6908-remessa-de-bem-por-conta-de-contrato-de-comodato",
        "titulo": "6908 - Remessa de bem por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as remessas de bens para o cumprimento de contrato de comodato."
    },
    {
        "id": "6909",
        "idPai": "6900",
        "idLink": "6909-retorno-de-bem-recebido-por-conta-de-contrato-de-comodato",
        "titulo": "6909 - Retorno de bem recebido por conta de contrato de comodato",
        "descricao": "Classificam-se neste código as remessas de bens em devolução após cumprido o contrato de comodato."
    },
    {
        "id": "6910",
        "idPai": "6900",
        "idLink": "6910-remessa-em-bonificacao-doacao-ou-brinde",
        "titulo": "6910 - Remessa em bonificação, doação ou brinde",
        "descricao": "Classificam-se neste código as remessas de mercadorias a título de bonificação, doação ou brinde."
    },
    {
        "id": "6911",
        "idPai": "6900",
        "idLink": "6911-remessa-de-amostra-gratis",
        "titulo": "6911 - Remessa de amostra grátis",
        "descricao": "Classificam-se neste código as remessas de mercadorias a título de amostra grátis."
    },
    {
        "id": "6912",
        "idPai": "6900",
        "idLink": "6912-remessa-de-mercadoria-ou-bem-para-demonstracao",
        "titulo": "6912 - Remessa de mercadoria ou bem para demonstração",
        "descricao": "Classificam-se neste código as remessas de mercadorias ou bens para demonstração."
    },
    {
        "id": "6913",
        "idPai": "6900",
        "idLink": "6913-retorno-de-mercadoria-ou-bem-recebido-para-demonstracao",
        "titulo": "6913 - Retorno de mercadoria ou bem recebido para demonstração",
        "descricao": "Classificam-se neste código as remessas em devolução de mercadorias ou bens recebidos para demonstração."
    },
    {
        "id": "6914",
        "idPai": "6900",
        "idLink": "6914-remessa-de-mercadoria-ou-bem-para-exposicao-ou-feira",
        "titulo": "6914 - Remessa de mercadoria ou bem para exposição ou feira",
        "descricao": "Classificam-se neste código as remessas de mercadorias ou bens para exposição ou feira."
    },
    {
        "id": "6915",
        "idPai": "6900",
        "idLink": "6915-remessa-de-mercadoria-ou-bem-para-conserto-ou-reparo",
        "titulo": "6915 - Remessa de mercadoria ou bem para conserto ou reparo",
        "descricao": "Classificam-se neste código as remessas de mercadorias ou bens para conserto ou reparo."
    },
    {
        "id": "6916",
        "idPai": "6900",
        "idLink": "6916-retorno-de-mercadoria-ou-bem-recebido-para-conserto-ou-reparo",
        "titulo": "6916 - Retorno de mercadoria ou bem recebido para conserto ou reparo",
        "descricao": "Classificam-se neste código as remessas em devolução de mercadorias ou bens recebidos para conserto ou reparo."
    },
    {
        "id": "6917",
        "idPai": "6900",
        "idLink": "6917-remessa-de-mercadoria-em-consignacao-mercantil-ou-industrial",
        "titulo": "6917 - Remessa de mercadoria em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as remessas de mercadorias a título de consignação mercantil ou industrial."
    },
    {
        "id": "6918",
        "idPai": "6900",
        "idLink": "6918-devolucao-de-mercadoria-recebida-em-consignacao-mercantil-ou-industrial",
        "titulo": "6918 - Devolução de mercadoria recebida em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as devoluções de mercadorias recebidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "6919",
        "idPai": "6900",
        "idLink": "6919-devolucao-simbolica-de-mercadoria-vendida-ou-utilizada-em-processo-industrial-recebida-anteriormente-em-consignacao-mercantil-ou-industrial",
        "titulo": "6919 - Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial",
        "descricao": "Classificam-se neste código as devoluções simbólicas de mercadorias vendidas ou utilizadas em processo industrial, que tenham sido recebidas anteriormente a título de consignação mercantil ou industrial."
    },
    {
        "id": "6920",
        "idPai": "6900",
        "idLink": "6920-remessa-de-vasilhame-ou-sacaria",
        "titulo": "6920 - Remessa de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as remessas de vasilhame ou sacaria."
    },
    {
        "id": "6921",
        "idPai": "6900",
        "idLink": "6921-devolucao-de-vasilhame-ou-sacaria",
        "titulo": "6921 - Devolução de vasilhame ou sacaria",
        "descricao": "Classificam-se neste código as saídas por devolução de vasilhame ou sacaria."
    },
    {
        "id": "6922",
        "idPai": "6900",
        "idLink": "6922-lancamento-efetuado-a-titulo-de-simples-faturamento-decorrente-de-venda-para-entrega-futura",
        "titulo": "6922 - Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura",
        "descricao": "Classificam-se neste código os registros efetuados a título de simples faturamento decorrente de venda para entrega futura."
    },
    {
        "id": "6923",
        "idPai": "6900",
        "idLink": "6923-remessa-de-mercadoria-por-conta-e-ordem-de-terceiros-em-venda-a-ordem",
        "titulo": "6923 - Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem",
        "descricao": "Classificam-se neste código as saídas correspondentes à entrega de mercadorias por conta e ordem de terceiros, em vendas à ordem, cuja venda ao adquirente originário, foi classificada nos códigos \"6.118 – Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\" ou \"6.119 – Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\"."
    },
    {
        "id": "6924",
        "idPai": "6900",
        "idLink": "6924-remessa-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-esta-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "6924 - Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as saídas de insumos com destino a estabelecimento industrializador, para serem industrializados por conta e ordem do adquirente, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente dos mesmos."
    },
    {
        "id": "6925",
        "idPai": "6900",
        "idLink": "6925-retorno-de-mercadoria-recebida-para-industrializacao-por-conta-e-ordem-do-adquirente-da-mercadoria-quando-aquela-nao-transitar-pelo-estabelecimento-do-adquirente",
        "titulo": "6925 - Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente",
        "descricao": "Classificam-se neste código as remessas, pelo estabelecimento industrializador, dos insumos recebidos, por conta e ordem do adquirente, para industrialização e incorporados ao produto final, nas hipóteses em que os insumos não tenham transitado pelo estabelecimento do adquirente. O valor dos insumos nesta operação deverá ser igual ao valor dos insumos recebidos para industrialização."
    },
    {
        "id": "6929",
        "idPai": "6900",
        "idLink": "6929-lancamento-efetuado-em-decorrencia-de-emissao-de-documento-fiscal-relativo-a-operacao-ou-prestacao-tambem-registrada-em-equipamento-emissor-de-cupom-fiscal-ecf",
        "titulo": "6929 - Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF",
        "descricao": "Classificam-se neste código os registros relativos aos documentos fiscais emitidos em operações ou prestações que também tenham sido registradas em equipamento Emissor de Cupom Fiscal - ECF."
    },
    {
        "id": "6931",
        "idPai": "6900",
        "idLink": "6931-lancamento-efetuado-em-decorrencia-da-responsabilidade-de-retencao-do-imposto-por-substituicao-tributaria-atribuida-ao-remetente-ou-alienante-da-mercadoria-pelo-servico-de-transporte-realizado-por-transportador-autonomo-ou-por-transportador-nao-inscrito-na-unidade-da-federacao-onde-iniciado-o-servico",
        "titulo": "6931 - Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço",
        "descricao": "Classificam-se neste código exclusivamente os lançamentos efetuados pelo remetente ou alienante da mercadoria quando lhe for atribuída a responsabilidade pelo recolhimento do imposto devido pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço."
    },
    {
        "id": "6932",
        "idPai": "6900",
        "idLink": "6932-prestacao-de-servico-de-transporte-iniciada-em-unidade-da-federacao-diversa-daquela-onde-inscrito-o-prestador",
        "titulo": "6932 - Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador",
        "descricao": "Classificam-se neste código as prestações de serviço de transporte que tenham sido iniciadas em unidade da Federação diversa daquela onde o prestador está inscrito como contribuinte."
    },
    {
        "id": "6933",
        "idPai": "6900",
        "idLink": "6933-prestacao-de-servico-tributado-pelo-issqn",
        "titulo": "6933 - Prestação de serviço tributado pelo ISSQN.",
        "descricao": "Classificam-se neste código as prestações de serviços, de competência municipal, desde que informados em documentos autorizados pelo Estado."
    },
    {
        "id": "6949",
        "idPai": "6900",
        "idLink": "6949-outra-saida-de-mercadoria-ou-prestacao-de-servico-nao-especificado",
        "titulo": "6949 - Outra saída de mercadoria ou prestação de serviço não especificado",
        "descricao": "Classificam-se neste código as outras saídas de mercadorias ou prestações de serviços que não tenham sido especificados nos códigos anteriores."
    },
    {
        "id": "7000",
        "idPai": 0,
        "idLink": "7000-saidas-ou-prestacoes-de-servicos-para-o-exterior",
        "titulo": "7000 - Saídas ou prestações de serviços para o Exterior",
        "descricao": "Classificam-se, neste grupo, as operações ou prestações em que o destinatário esteja localizado em outro país."
    },
    {
        "id": "7100",
        "idPai": "7000",
        "idLink": "7100-vendas-de-producao-propria-ou-de-terceiros",
        "titulo": "7100 - Vendas de produção própria ou de terceiros"
    },
    {
        "id": "7200",
        "idPai": "7000",
        "idLink": "7200-devolucoes-de-compras-para-industrializacao-comercializacao-ou-anulacoes-de-valores",
        "titulo": "7200 - Devoluções de compras para industrialização, comercialização ou anulações de valores "
    },
    {
        "id": "7250",
        "idPai": "7000",
        "idLink": "7250-vendas-de-energia-eletrica",
        "titulo": "7250 - Vendas de energia elétrica "
    },
    {
        "id": "7300",
        "idPai": "7000",
        "idLink": "7300-prestacoes-de-servicos-de-comunicacao",
        "titulo": "7300 - Prestações de serviços de comunicação"
    },
    {
        "id": "7350",
        "idPai": "7000",
        "idLink": "7350-prestacoes-de-servicos-de-transporte",
        "titulo": "7350 - Prestações de serviços de transporte"
    },
    {
        "id": "7500",
        "idPai": "7000",
        "idLink": "7500-exportacao-de-mercadorias-recebidas-com-fim-especifico-de-exportacao",
        "titulo": "7500 - Exportação de mercadorias recebidas com fim específico de exportação"
    },
    {
        "id": "7550",
        "idPai": "7000",
        "idLink": "7550-operacoes-com-bens-de-ativo-imobilizado-e-materiais-para-uso-ou-consumo",
        "titulo": "7550 - Operações com bens de ativo imobilizado e materiais para uso ou consumo"
    },
    {
        "id": "7650",
        "idPai": "7000",
        "idLink": "7650-saidas-de-combustiveis-derivados-ou-nao-de-petroleo-e-lubrificantes",
        "titulo": "7650 - Saídas de combustíveis, derivados ou não de petróleo e lubrificantes"
    },
    {
        "id": "7900",
        "idPai": "7000",
        "idLink": "7900-outras-entradas-de-mercadorias-ou-aquisicoes-de-servicos",
        "titulo": "7900 - Outras entradas de mercadorias ou aquisições de serviços"
    },
    {
        "id": "7101",
        "idPai": "7100",
        "idLink": "7101-venda-de-producao-do-estabelecimento",
        "titulo": "7101 - Venda de produção do estabelecimento",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento. Também serão classificadas neste código as vendas de mercadorias por estabelecimento industrial de cooperativa."
    },
    {
        "id": "7102",
        "idPai": "7100",
        "idLink": "7102-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros",
        "titulo": "7102 - Venda de mercadoria adquirida ou recebida de terceiros",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, que não tenham sido objeto de qualquer processo industrial no estabelecimento. Também serão classificadas neste código as vendas de mercadorias por estabelecimento comercial de cooperativa."
    },
    {
        "id": "7105",
        "idPai": "7100",
        "idLink": "7105-venda-de-producao-do-estabelecimento-que-nao-deva-por-ele-transitar",
        "titulo": "7105 - Venda de produção do estabelecimento, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as vendas de produtos industrializados no estabelecimento, armazenados em depósito fechado, armazém geral ou outro sem que haja retorno ao estabelecimento depositante."
    },
    {
        "id": "7106",
        "idPai": "7100",
        "idLink": "7106-venda-de-mercadoria-adquirida-ou-recebida-de-terceiros-que-nao-deva-por-ele-transitar",
        "titulo": "7106 - Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
        "descricao": "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros para industrialização ou comercialização, armazenadas em depósito fechado, armazém geral ou outro, que não tenham sido objeto de qualquer processo industrial no estabelecimento sem que haja retorno ao estabelecimento depositante. Também serão classificadas neste código as vendas de mercadorias importadas, cuja saída ocorra do recinto alfandegado ou da repartição alfandegária onde se processou o desembaraço aduaneiro, com destino ao estabelecimento do comprador, sem transitar pelo estabelecimento do importador."
    },
    {
        "id": "7127",
        "idPai": "7100",
        "idLink": "7127-venda-de-producao-do-estabelecimento-sob-o-regime-de-drawback",
        "titulo": "7127 - Venda de produção do estabelecimento sob o regime de “drawback”",
        "descricao": "lassificam-se neste código as vendas de produtos industrializados no estabelecimento sob o regime de “drawback”, cujas compras foram classificadas no código “3.127 - Compra para industrialização sob o regime de “drawback””."
    },
    {
        "id": "7201",
        "idPai": "7200",
        "idLink": "7201-devolucao-de-compra-para-industrializacao",
        "titulo": "7201 - Devolução de compra para industrialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem utilizadas em processo de industrialização, cujas entradas tenham sido classificadas como “Compra para industrialização”."
    },
    {
        "id": "7202",
        "idPai": "7200",
        "idLink": "7202-devolucao-de-compra-para-comercializacao",
        "titulo": "7202 - Devolução de compra para comercialização",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem comercializadas, cujas entradas tenham sido classificadas como “Compra para comercialização”."
    },
    {
        "id": "7205",
        "idPai": "7200",
        "idLink": "7205-anulacao-de-valor-relativo-a-aquisicao-de-servico-de-comunicacao",
        "titulo": "7205 - Anulação de valor relativo à aquisição de serviço de comunicação",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes das aquisições de serviços de comunicação."
    },
    {
        "id": "7206",
        "idPai": "7200",
        "idLink": "7206-anulacao-de-valor-relativo-a-aquisicao-de-servico-de-transporte",
        "titulo": "7206 - Anulação de valor relativo a aquisição de serviço de transporte",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes das aquisições de serviços de transporte."
    },
    {
        "id": "7207",
        "idPai": "7200",
        "idLink": "7207-anulacao-de-valor-relativo-a-compra-de-energia-eletrica",
        "titulo": "7207 - Anulação de valor relativo à compra de energia elétrica",
        "descricao": "Classificam-se neste código as anulações correspondentes a valores faturados indevidamente, decorrentes da compra de energia elétrica."
    },
    {
        "id": "7210",
        "idPai": "7200",
        "idLink": "7210-devolucao-de-compra-para-utilizacao-na-prestacao-de-servico",
        "titulo": "7210 - Devolução de compra para utilização na prestação de serviço",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para utilização na prestação de serviços, cujas entradas tenham sido classificadas no código “3.126 - Compra para utilização na prestação de serviço”."
    },
    {
        "id": "7211",
        "idPai": "7200",
        "idLink": "7211-devolucao-de-compras-para-industrializacao-sob-o-regime-de-drawback",
        "titulo": "7211 - Devolução de compras para industrialização sob o regime de drawback”",
        "descricao": "Classificam-se neste código as devoluções de mercadorias adquiridas para serem utilizadas em processo de industrialização sob o regime de \"drawback\" e não utilizadas no referido processo, cujas entradas tenham sido classificadas no código \"3.127 – Compra para industrialização sob o regime de \"drawback\"\"."
    },
    {
        "id": "7251",
        "idPai": "7250",
        "idLink": "7251-venda-de-energia-eletrica-para-o-exterior",
        "titulo": "7251 - Venda de energia elétrica para o exterior",
        "descricao": "Classificam-se neste código as vendas de energia elétrica para o exterior."
    },
    {
        "id": "7301",
        "idPai": "7300",
        "idLink": "7301-prestacao-de-servico-de-comunicacao-para-execucao-de-servico-da-mesma-natureza",
        "titulo": "7301 - Prestação de serviço de comunicação para execução de serviço da mesma natureza",
        "descricao": "Classificam-se neste código as prestações de serviços de comunicação destinados às prestações de serviços da mesma natureza."
    },
    {
        "id": "7358",
        "idPai": "7350",
        "idLink": "7358-prestacao-de-servico-de-transporte",
        "titulo": "7358 - Prestação de serviço de transporte",
        "descricao": "Classificam-se neste código as prestações de serviços de transporte destinado a estabelecimento no exterior."
    },
    {
        "id": "7501",
        "idPai": "7500",
        "idLink": "7501-exportacao-de-mercadorias-recebidas-com-fim-especifico-de-exportacao",
        "titulo": "7501 - Exportação de mercadorias recebidas com fim específico de exportação",
        "descricao": "Classificam-se neste código as exportações das mercadorias recebidas anteriormente com finalidade específica de exportação, cujas entradas tenham sido classificadas nos códigos \"1.501 – Entrada de mercadoria recebida com fim específico de exportação\" ou \"2.501 – Entrada de mercadoria recebida com fim específico de exportação\"."
    },
    {
        "id": "7551",
        "idPai": "7550",
        "idLink": "7551-venda-de-bem-do-ativo-imobilizado",
        "titulo": "7551 - Venda de bem do ativo imobilizado",
        "descricao": "Classificam-se neste código as vendas de bens integrantes do ativo imobilizado do estabelecimento."
    },
    {
        "id": "7553",
        "idPai": "7550",
        "idLink": "7553-devolucao-de-compra-de-bem-para-o-ativo-imobilizado",
        "titulo": "7553 - Devolução de compra de bem para o ativo imobilizado",
        "descricao": "Classificam-se neste código as devoluções de bens adquiridos para integrar o ativo imobilizado do estabelecimento, cuja entrada foi classificada no código “3.551 - Compra de bem para o ativo imobilizado”."
    },
    {
        "id": "7556",
        "idPai": "7550",
        "idLink": "7556-devolucao-de-compra-de-material-de-uso-ou-consumo",
        "titulo": "7556 - Devolução de compra de material de uso ou consumo",
        "descricao": "Classificam-se neste código as devoluções de mercadorias destinadas ao uso ou consumo do estabelecimento, cuja entrada tenha sido classificada no código “3.556 - Compra de material para uso ou consumo”."
    },
    {
        "id": "7651",
        "idPai": "7650",
        "idLink": "7651-venda-de-combustivel-ou-lubrificante-de-producao-do-estabelecimento",
        "titulo": "7651 - Venda de combustível ou lubrificante de produção do estabelecimento",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes industrializados no estabelecimento destinados ao exterior."
    },
    {
        "id": "7654",
        "idPai": "7650",
        "idLink": "7654-venda-de-combustivel-ou-lubrificante-adquirido-ou-recebido-de-terceiros",
        "titulo": "7654 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros",
        "descricao": "Classificam-se neste código as vendas de combustíveis ou lubrificantes adquiridos ou recebidos de terceiros destinados ao exterior.”;"
    },
    {
        "id": "7930",
        "idPai": "7900",
        "idLink": "7930-lancamento-efetuado-a-titulo-de-devolucao-de-bem-cuja-entrada-tenha-ocorrido-sob-amparo-de-regime-especial-aduaneiro-de-admissao-temporaria",
        "titulo": "7930 - Lançamento efetuado a título de devolução de bem cuja entrada tenha ocorrido sob amparo de regime especial aduaneiro de admissão temporária",
        "descricao": "Classificam-se neste código os lançamentos efetuados a título de saída em devolução de bens cuja entrada tenha ocorrido sob amparo de regime especial aduaneiro de admissão temporária."
    },
    {
        "id": "7949",
        "idPai": "7900",
        "idLink": "7949-outra-saida-de-mercadoria-ou-prestacao-de-servico-nao-especificado",
        "titulo": "7949 - Outra saída de mercadoria ou prestação de serviço não especificado",
        "descricao": "Classificam-se neste código as outras saídas de mercadorias ou prestações de serviços que não tenham sido especificados nos códigos anteriores."
    }
];
  return{
    getAll:function(){return cfops.slice();}

  };
});
