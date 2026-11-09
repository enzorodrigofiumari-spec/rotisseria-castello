// CONFIGURAÇÃO DO FIREBASE COM SUAS CREDENCIAIS REAIS
const firebaseConfig = {
  apiKey: "AIzaSyDJlWI7M6mmT0Oqj0Xy2OZfD5BqhpX2_rc",
  authDomain: "rotisseria-castello.firebaseapp.com",
  databaseURL: "https://rotisseria-castello-default-rtdb.firebaseio.com",
  projectId: "rotisseria-castello",
  storageBucket: "rotisseria-castello.firebasestorage.app",
  messagingSenderId: "226373631614",
  appId: "1:226373631614:web:f0954d44e7ffe818c5e22f",
  measurementId: "G-9VVB9YNNZ2"
};

// INICIALIZAR FIREBASE (MODO COMPATÍVEL PARA NAVEGADOR)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const CONFIG = {
  telefoneWhatsapp: "5516997658154",
  chavePix: "21.878.140/0001-37 (CNPJ)",
  senhaAdmin: "1234"
};

// BANCO DE BEBIDAS ORGANIZADO POR CATEGORIAS (FORMATO COMPACTO PARA CELULAR)
const BANCO_BEBIDAS_CATEGORIZADO = [
  {
    categoria: "🥤 Refrigerantes Lata (350ml)",
    itens: [
      { id: 101, nome: "Coca-Cola Normal Lata", preco: 5.50 },
      { id: 102, nome: "Coca-Cola Zero Lata", preco: 5.50 },
      { id: 103, nome: "Guaraná Antarctica Lata", preco: 5.50 },
      { id: 104, nome: "Guaraná Antarctica Zero Lata", preco: 5.50 }
    ]
  },
  {
    categoria: "🍾 Refrigerantes 600ml",
    itens: [
      { id: 105, nome: "Coca-Cola 600ml", preco: 7.50 },
      { id: 106, nome: "Coca-Cola Zero 600ml", preco: 7.50 },
      { id: 107, nome: "Guaraná Antarctica 600ml", preco: 7.50 },
      { id: 108, nome: "Guaraná Antarctica Zero 600ml", preco: 7.50 }
    ]
  },
  {
    categoria: "🍋 H2O",
    itens: [
      { id: 109, nome: "H2O Limão", preco: 7.50 },
      { id: 110, nome: "H2O Limoneto", preco: 7.50 }
    ]
  },
  {
    categoria: "Family / Grande (1,5L e 2L)",
    itens: [
      { id: 111, nome: "Guaraná Kuat 1,5L", preco: 12.00 },
      { id: 112, nome: "Guaraná Antarctica 2L", preco: 12.00 },
      { id: 113, nome: "Coca-Cola 2L", preco: 15.00 },
      { id: 114, nome: "Coca-Cola Zero 2L", preco: 15.00 }
    ]
  },
  {
    categoria: "💧 Águas",
    itens: [
      { id: 115, nome: "Água sem Gás", preco: 4.00 },
      { id: 116, nome: "Água com Gás", preco: 4.50 }
    ]
  }
];

// LISTA FIXA DE SUGESTÕES DO CHEF (R$ 23,00)
const BANCO_SUGESTOES = [
  "Macarrao alho e oleo com tomate seco e rucula",
  "Hamburguer a Cavalo (marmitex redondo 500ml)",
  "Nhoque com frango grelhado",
  "Especial de Panqueca (Carne, Frango ou Mista)",
  "Macarrao parisiense com file de frango grelhado e batata frita"
];

// LISTA FIXA DE ESPECIAIS DO DIA (R$ 33,00)
const BANCO_ESPECIAIS = [
  { nome: "Estrogonofe de Filé Mignon", desc: "Estrogonofe de filé + Arroz Branco + Batata Frita", img: "img/estrogonofe-file.png" },
  { nome: "Filé à Cubana", desc: "Filé Mignon à Milanesa + 2 Bananas à Milanesa + Arroz Branco + Brócolis e Pêssego", img: "img/file-cubana.png" },
  { nome: "Contra Filé à Parmegiana", desc: "2 Bifes Contra Filé à Parmegiana (sem gordura) + Arroz Branco + Batata Frita", img: "img/contra-file-parmegiana.png" },
  { nome: "Filé Mignon à Moda", desc: "Filé em cubos c/ tomate, cebola, requeijão e mussarela + Arroz à Grega + Batata Frita", img: "img/file-mignon-moda.png" },
  { nome: "Filé à Paris", desc: "2 Mignons Grelhados ao Molho Branco, presunto, mussarela e palmito + Arroz Branco + Cenoura c/ Brócolis", img: "img/file-paris.png" },
  { nome: "JK Frango", desc: "JK recheado e frito (cenoura c/ brócolis e mussarela) + Arroz c/ ervilhas e gema + Batata Frita", img: "img/jk-frango.png" },
  { nome: "Baby Beef", desc: "2 Bifes Baby Grelhados c/ pimenta biquinho + Batata Frita + Arroz Cremos e Cenoura", img: "img/baby-beef.png" },
  { nome: "Contra Filé c/ Ovo", desc: "2 Bifes Contra Filé c/ 1 ovo frito em cima + Arroz de Forno (sem molho) + Batata Palha", img: "img/contra-file-ovo.png" },
  { nome: "Tilápia à Parmegiana", desc: "2 pedaços de Tilápia à Parmegiana + Arroz Branco + Batata Frita", img: "img/tilapia-parmegiana.png" },
  { nome: "Iscas Contra Filé à Moda", desc: "Iscas de Contra Filé c/ tomate, cebola e molho 4 queijos + Arroz Branco + Batata Frita", img: "img/iscas-contra-file-moda.png" },
  { nome: "Virado a Paulista", desc: "Virado à Paulista + Arroz + Feijão + Ovo + Couve + Bisteca", img: "img/virado-paulista.png" },
  { nome: "Porpetone Recheado", desc: "Porpeta enrolada com bacon e recheada com requeijão + Arroz branco + Iscas de frango crocante + Brócolis refogado + Batata frita", img: "img/porpetone-recheado.png" }
];

// BANCO DE DADOS COMPLETO E ORGANIZADO COM OS NOVOS ITENS DA SEMANA
const BANCO_OPCOES = {
  feijoesEspeciais: [
    "Feijao Tropeiro",
    "Tutu de Feijao"
  ],
  bases: [
    "Arroz Branco",
    "Arroz Biro Biro (com batata palha, ovos e bacon)",
    "Arroz a Grega",
    "Arroz com Brocolis e Queijo"
  ],
  carnes: [
    "Almondegas suinas ao molho barbecue",
    "Bife acebolado",
    "Bife de pernil acebolado",
    "Bisteca suina acebolada",
    "Bolo de carne moida a parmegiana",
    "Calabresa acebolada",
    "Carne de panela com batata",
    "Carne moida com legumes",
    "Charuto de repolho",
    "Costela bovina na panela",
    "Costelinha assada com barbecue",
    "Costelinha suina assada",
    "Dobradinha",
    "Estrogonofe de carne",
    "Estrogonofe de frango",
    "Feijoada da Casa",
    "File de frango a milanesa",
    "File de frango a parmegiana",
    "File de frango acebolado",
    "File de frango com creme de milho",
    "File de frango grelhado",
    "File de peixe a milanesa",
    "Frango a passarinho",
    "Frango cremoso",
    "Frango refogado ao molho",
    "Frango xadrez",
    "Fricasse de frango com batata palha",
    "Iscas de frango com bacon e requeijao",
    "Iscas de frango crocante",
    "Linguica fininha frita",
    "Linguica recheada com vinagrete e queijo",
    "Linguica toscana acebolada",
    "Linguica toscana com vinagrete e requeijao",
    "Lombo assado",
    "Lombo assado ao molho madeira",
    "Panquecas de frango ou carne",
    "Pernil na panela",
    "Picadinho de frango com mostarda e legumes",
    "Ponta de peito assada ao molho",
    "Quibe assado recheado",
    "Sobrecoxa de frango assada",
    "Staek de frango a parmegiana",
    "Tiras de carne com tomate e cebola",
    "Tirinhas de frango crocante"
  ],
  guarnicoes: [
    "Abobrinha refogada com alho",
    "Abobrinha na manteiga com hortela",
    "Acelga refogada com shoyu",
    "Antepasto de berinjela",
    "Banana a milanesa",
    "Batata frita",
    "Batata doce frita",
    "Batata palha",
    "Batata com cenoura refogada",
    "Bolinho de arroz com espinafre",
    "Cabotia refogada",
    "Cenoura com Brocolis",
    "Cenoura refogada",
    "Chica doida (creme de milho com queijo e bacon)",
    "Chuchu com molho branco e ricota",
    "Chuchu refogado",
    "Couve refogada",
    "Espaguete ao molho de tomate",
    "Espaguete alho e oleo",
    "Farofa da casa",
    "Farofa de milho com legumes",
    "Fettuccine ao molho de calabresa",
    "Jilo frito",
    "Legumes a saute",
    "Macarrao colorido alho e oleo",
    "Macarrao com molho branco e parmesao",
    "Macarrao espaguete ao molho de tomate",
    "Macarrao yakissoba de legumes",
    "Mandioca frita",
    "Mix / Seleta de legumes",
    "Ovo frito",
    "Polenta ao molho",
    "Repolho refogado com tomate",
    "Tempura de legumes",
    "Torta de frango com requeijao"
  ]
};

// MARMITAS E CAMINHO DAS FOTOS DA PASTA img/ (FORMATO .PNG)
const MARMITAS_TIPOS = [
  { id: 1, nome: "Marmita Mini (3 divisoes)", tamanho: "500ml", preco: 21.00, maxCarnes: 1, maxGuarnicoes: 1, img: "img/mini.png", fallbackImg: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400" },
  { id: 2, nome: "Marmitex Medio", tamanho: "Redondo 750ml", preco: 25.00, maxCarnes: 1, maxGuarnicoes: 2, img: "img/medio.png", fallbackImg: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
  { id: 3, nome: "Marmitex Grande", tamanho: "Redondo 1000ml", preco: 30.00, maxCarnes: 2, maxGuarnicoes: 2, img: "img/grande.png", fallbackImg: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" },
  { id: 4, nome: "Marmita Executiva (3 divisoes)", tamanho: "1100ml", preco: 36.00, maxCarnes: 2, maxGuarnicoes: 2, img: "img/executiva.png", fallbackImg: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400" }
];

// ESTADO PADRÃO DO CARDÁPIO ATIVO
const CARDAPIO_DEFAULT = {
  statusLoja: "Aberto",
  feijoadaAtiva: false,
  fitAtiva: true,
  fitDesc: "Frango Grelhado + Arroz Integral + Seleta de Legumes a Saute",
  comboPanquecaAtivo: true,
  sugestaoAtiva: true,
  especialAtivo: true,
  saladaAtiva: true,
  saladaDiaDesc: "Alface, Tomate e Maionese de Batata",
  sugestaoChef: "Especial de Panqueca (Carne, Frango ou Mista)",
  sugestaoImg: "img/sugestao.png",
  especialNome: "Contra File a Parmegiana",
  especialDia: "2 Bifes Contra File a Parmegiana (sem gordura) + Arroz Branco + Batata Frita",
  especialImg: "img/contra-file-parmegiana.png",
  feijoesEspeciaisAtivos: [0, 1],
  basesAtivas: [0, 1],
  carnesAtivas: [1, 10, 16],
  guarnicoesAtivas: [5, 13, 16]
};

let cardapioDia = { ...CARDAPIO_DEFAULT };
let carrinho = [];
let marmitaEmSelecao = null;
let panquecaItemTemp = null;

document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  renderizarMarmitasCards();
  renderizarBebidas();
  atualizarInterface();
  configurarOpcaoPagamentoConta();
  document.getElementById("btn-admin").addEventListener("click", abrirAdmin);
  
  const selectEntrega = document.getElementById("cliente-bairro");
  if (selectEntrega) {
    selectEntrega.addEventListener("change", alternarExibicaoEndereco);
  }
});

// ESCUTA EM TEMPO REAL NO FIREBASE
function carregarDados() {
  database.ref("cardapioDia").on("value", (snapshot) => {
    const dadosNuvem = snapshot.val();
    if (dadosNuvem) {
      cardapioDia = dadosNuvem;
      atualizarInterface();
    } else {
      cardapioDia = { ...CARDAPIO_DEFAULT };
      database.ref("cardapioDia").set(CARDAPIO_DEFAULT);
    }
  });
}

function configurarOpcaoPagamentoConta() {
  const selectPag = document.getElementById("cliente-pagamento");
  if (selectPag) {
    let jaExiste = Array.from(selectPag.options).some(opt => opt.value === "Marcar na Conta");
    if (!jaExiste) {
      const optConta = document.createElement("option");
      optConta.value = "Marcar na Conta";
      optConta.innerText = "Marcar na Conta (Caderneta)";
      selectPag.appendChild(optConta);
    }

    selectPag.onchange = function() {
      trocarPagamento();
    };
  }
}

function alternarExibicaoEndereco() {
  const selectEntrega = document.getElementById("cliente-bairro");
  const inputEndereco = document.getElementById("cliente-endereco");
  const grupoEndereco = inputEndereco ? inputEndereco.closest(".form-group") : null;

  if (selectEntrega.value === "Retirada") {
    if (grupoEndereco) grupoEndereco.style.display = "none";
    inputEndereco.removeAttribute("required");
  } else {
    if (grupoEndereco) grupoEndereco.style.display = "block";
    inputEndereco.setAttribute("required", "required");
  }
  atualizarTotais();
}

function atualizarInterface() {
  const sugestaoTexto = cardapioDia.sugestaoChef || CARDAPIO_DEFAULT.sugestaoChef;
  document.getElementById("desc-sugestao").innerText = sugestaoTexto;
  document.getElementById("desc-especial").innerText = (cardapioDia.especialNome ? cardapioDia.especialNome + (cardapioDia.especialDia ? ": " + cardapioDia.especialDia : "") : CARDAPIO_DEFAULT.especialDia);
  
  if (cardapioDia.sugestaoImg) document.getElementById("img-sugestao").src = cardapioDia.sugestaoImg;
  if (cardapioDia.especialImg) document.getElementById("img-especial").src = cardapioDia.especialImg;

  // VISIBILIDADE DA SUGESTÃO DO CHEF
  const cardSugestao = document.getElementById("desc-sugestao")?.closest('.card');
  if (cardSugestao) {
    if (cardapioDia.sugestaoAtiva !== false) {
      cardSugestao.style.display = "block";
      const btnSugestao = cardSugestao.querySelector('.btn-add');
      if (btnSugestao) {
        if (sugestaoTexto.toLowerCase().includes("panqueca")) {
          btnSugestao.setAttribute("onclick", `abrirModalPanqueca('${sugestaoTexto}', 23.00)`);
        } else {
          btnSugestao.setAttribute("onclick", `adicionarDireto('${sugestaoTexto}', 23.00)`);
        }
      }
    } else {
      cardSugestao.style.display = "none";
    }
  }

  // VISIBILIDADE DO ESPECIAL DO DIA
  const cardEspecial = document.getElementById("desc-especial")?.closest('.card');
  if (cardEspecial) {
    if (cardapioDia.especialAtivo !== false) {
      cardEspecial.style.display = "block";
    } else {
      cardEspecial.style.display = "none";
    }
  }

  // CARD FIXO DA MARMITA FIT
  let boxFit = document.getElementById("card-fit-destaque");
  if (cardapioDia.fitAtiva !== false) {
    if (!boxFit) {
      const parent = document.getElementById("desc-sugestao") ? document.getElementById("desc-sugestao").closest(".card") : null;
      if (parent) {
        boxFit = document.createElement("div");
        boxFit.id = "card-fit-destaque";
        boxFit.className = "card";
        boxFit.style.marginTop = "15px";
        boxFit.style.borderLeft = "5px solid #28a745";
        parent.parentNode.insertBefore(boxFit, parent.nextSibling);
      }
    }

    if (boxFit) {
      boxFit.style.display = "block";
      boxFit.innerHTML = `
        <div class="card-body">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <span class="badge" style="background:#28a745; color:white; padding:3px 8px; border-radius:4px; font-size:0.75rem;">🥗 OPÇÃO FIT DO DIA</span>
              <h3 style="margin-top:5px; color:#28a745;">Marmitinha Fit</h3>
              <p class="descricao-prato" style="margin-top:5px;">${cardapioDia.fitDesc || "Cardapio Fit Especial"}</p>
            </div>
            <p class="preco-tag" style="color:#28a745; font-size:1.1rem; font-weight:bold;">R$ 17,50</p>
          </div>
          <button onclick="adicionarDireto('Marmitinha Fit: ' + '${cardapioDia.fitDesc || "Marmita Fit do Dia"}', 17.50)" class="btn-add" style="background:#28a745; width:100%; margin-top:10px;">+ Pedir Marmitinha Fit (R$ 17,50)</button>
        </div>
      `;
    }
  } else if (boxFit) {
    boxFit.style.display = "none";
  }

  // CARD FIXO DO COMBO DE PANQUECAS (R$ 30,00) - COM IMAGEM
  let boxComboPanqueca = document.getElementById("card-combo-panqueca");
  if (cardapioDia.comboPanquecaAtivo !== false) {
    if (!boxComboPanqueca) {
      const refElement = document.getElementById("card-fit-destaque") || (document.getElementById("desc-sugestao") ? document.getElementById("desc-sugestao").closest(".card") : null);
      if (refElement) {
        boxComboPanqueca = document.createElement("div");
        boxComboPanqueca.id = "card-combo-panqueca";
        boxComboPanqueca.className = "card";
        boxComboPanqueca.style.marginTop = "15px";
        boxComboPanqueca.style.borderLeft = "5px solid #d9381e";
        refElement.parentNode.insertBefore(boxComboPanqueca, refElement.nextSibling);
      }
    }

    if (boxComboPanqueca) {
      boxComboPanqueca.style.display = "block";
      boxComboPanqueca.innerHTML = `
        <img src="img/combo-de-panqueca.png" onerror="this.style.display='none'" alt="Combo de Panquecas" class="foto-prato">
        <div class="card-body">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <span class="badge" style="background:#d9381e; color:white; padding:3px 8px; border-radius:4px; font-size:0.75rem;">🥞 COMBO ESPECIAL</span>
              <h3 style="margin-top:5px; color:#d9381e;">Combo de Panquecas</h3>
              <p class="descricao-prato" style="margin-top:5px;">Panquecas artesanais acompanhadas de Arroz + Batata Frita + Salada</p>
            </div>
            <p class="preco-tag" style="color:#d9381e; font-size:1.1rem; font-weight:bold;">R$ 30,00</p>
          </div>
          <button onclick="abrirModalPanqueca('Combo de Panquecas', 30.00)" class="btn-add" style="background:#d9381e; width:100%; margin-top:10px;">+ Escolher Recheio e Pedir (R$ 30,00)</button>
        </div>
      `;
    }
  } else if (boxComboPanqueca) {
    boxComboPanqueca.style.display = "none";
  }

  const statusElement = document.getElementById("status-loja");
  if (cardapioDia.statusLoja === "Aberto") {
    statusElement.className = "badge badge-aberto";
    statusElement.innerText = "Aberto para Pedidos";
  } else {
    statusElement.className = "badge badge-fechado";
    statusElement.innerText = "Fechado no Momento";
  }
}

// CRIA E ABRE O MODAL INTERATIVO COM BOTÕES PARA AS PANQUECAS
function abrirModalPanqueca(nomeItem, preco) {
  if (cardapioDia.statusLoja !== "Aberto") {
    alert("Desculpe, a loja está fechada no momento!");
    return;
  }

  panquecaItemTemp = { nome: nomeItem, preco: preco };

  let modalPanqueca = document.getElementById("modal-selecao-panqueca");
  if (!modalPanqueca) {
    modalPanqueca = document.createElement("div");
    modalPanqueca.id = "modal-selecao-panqueca";
    modalPanqueca.className = "modal";
    modalPanqueca.style.display = "none";
    modalPanqueca.style.position = "fixed";
    modalPanqueca.style.top = "0";
    modalPanqueca.style.left = "0";
    modalPanqueca.style.width = "100%";
    modalPanqueca.style.height = "100%";
    modalPanqueca.style.backgroundColor = "rgba(0,0,0,0.6)";
    modalPanqueca.style.zIndex = "9999";
    modalPanqueca.style.justifyContent = "center";
    modalPanqueca.style.alignItems = "center";

    modalPanqueca.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 8px; width: 90%; max-width: 400px; text-align: center; position: relative;">
        <h3 id="titulo-modal-panqueca" style="color: #d9381e; margin-bottom: 10px;">Escolha o Recheio</h3>
        <p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">Clique na opção desejada para adicionar ao seu pedido:</p>
        
        <button onclick="confirmarRecheioPanqueca('Só Frango')" class="btn-add" style="width: 100%; margin-bottom: 10px; padding: 12px; font-size: 1rem; background: #28a745;">
          🍗 Só Frango
        </button>
        <button onclick="confirmarRecheioPanqueca('Só Carne')" class="btn-add" style="width: 100%; margin-bottom: 10px; padding: 12px; font-size: 1rem; background: #d9381e;">
          🥩 Só Carne
        </button>
        <button onclick="confirmarRecheioPanqueca('Mista (Frango + Carne)')" class="btn-add" style="width: 100%; margin-bottom: 15px; padding: 12px; font-size: 1rem; background: #fd7e14;">
          🌓 Mista (Frango + Carne)
        </button>

        <button onclick="fecharModalPanqueca()" style="background: #6c757d; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">
          Cancelar
        </button>
      </div>
    `;

    document.body.appendChild(modalPanqueca);
  }

  document.getElementById("titulo-modal-panqueca").innerText = `Recheio das Panquecas (${nomeItem})`;
  modalPanqueca.style.display = "flex";
}

function fecharModalPanqueca() {
  const modalPanqueca = document.getElementById("modal-selecao-panqueca");
  if (modalPanqueca) modalPanqueca.style.display = "none";
  panquecaItemTemp = null;
}

function confirmarRecheioPanqueca(recheio) {
  if (!panquecaItemTemp) return;

  carrinho.push({
    nome: `${panquecaItemTemp.nome} (${recheio})`,
    preco: panquecaItemTemp.preco,
    detalhes: null,
    qtd: 1
  });

  fecharModalPanqueca();
  renderizarCarrinho();
}

function renderizarMarmitasCards() {
  const container = document.getElementById("container-marmitas");
  if (!container) return;
  container.innerHTML = "";

  MARMITAS_TIPOS.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <img src="${m.img}" onerror="this.src='${m.fallbackImg}'" alt="${m.nome}" class="foto-prato">
        <div class="card-body">
          <div>
            <h3>${m.nome}</h3>
            <span style="font-size:0.8rem; color:#666;">Tamanho: ${m.tamanho}</span>
            <p class="descricao-prato">Permite: <strong>${m.maxCarnes} Carne(s)</strong> + <strong>${m.maxGuarnicoes} Acomp.</strong></p>
          </div>
          <div>
            <p class="preco-tag">R$ ${m.preco.toFixed(2).replace('.', ',')}</p>
            <button onclick="abrirModalMontar(${m.id})" class="btn-add">Escolher Itens e Pedir</button>
          </div>
        </div>
      </div>
    `;
  });
}

function alternarExibicaoBebidas(querBebida) {
  const boxBebidas = document.getElementById("box-lista-bebidas");
  if (!boxBebidas) return;

  if (querBebida) {
    boxBebidas.style.display = "block";
  } else {
    boxBebidas.style.display = "none";
  }
}

function renderizarBebidas() {
  const container = document.getElementById("container-bebidas");
  if (!container) return;
  container.innerHTML = "";

  BANCO_BEBIDAS_CATEGORIZADO.forEach(grupo => {
    let htmlGrupo = `
      <div style="margin-bottom: 15px;">
        <h3 style="font-size:0.95rem; color:#d9381e; margin-bottom:8px; border-bottom:2px solid #f2f2f2; padding-bottom:4px;">
          ${grupo.categoria}
        </h3>
    `;

    grupo.itens.forEach(b => {
      htmlGrupo += `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #f9f9f9;">
          <div>
            <span style="font-size:0.9rem; font-weight:600;">${b.nome}</span><br>
            <small style="color:#28a745; font-weight:bold;">R$ ${b.preco.toFixed(2).replace('.', ',')}</small>
          </div>
          <button type="button" onclick="adicionarDireto('${b.nome}', ${b.preco})" class="btn-add" style="padding:4px 10px; font-size:0.8rem;">+ Pedir</button>
        </div>
      `;
    });

    htmlGrupo += `</div>`;
    container.innerHTML += htmlGrupo;
  });
}

function abrirModalMontar(idMarmita) {
  if (cardapioDia.statusLoja !== "Aberto") {
    alert("Desculpe, a loja esta fechada no momento!");
    return;
  }

  marmitaEmSelecao = MARMITAS_TIPOS.find(m => m.id === idMarmita);

  document.getElementById("modal-titulo-marmita").innerText = `Montar ${marmitaEmSelecao.nome}`;
  document.getElementById("modal-regras-marmita").innerText = `Escolha o feijao, Arroz, ate ${marmitaEmSelecao.maxCarnes} Carne(s), ate ${marmitaEmSelecao.maxGuarnicoes} Acompanhamento(s).`;

  const boxFeijao = document.querySelector("#modal-montar .grid-checkboxes");
  let htmlFeijao = `
    <label class="check-item"><input type="radio" name="opcao-feijao" value="Feijao Normal da Casa" checked onchange="alternarModoFeijoada(false)"> Feijao Normal da Casa (Incluso)</label>
  `;

  if (cardapioDia.feijoadaAtiva) {
    htmlFeijao += `
      <label class="check-item"><input type="radio" name="opcao-feijao" value="FEIJOADA COMPLETA" onchange="alternarModoFeijoada(true)"> 🍲 FEIJOADA COMPLETA (Arroz, Feijoada, Couve, Farofa e Torresmo)</label>
    `;
  }

  htmlFeijao += `<label class="check-item"><input type="radio" name="opcao-feijao" value="SEM FEIJAO" onchange="alternarModoFeijoada(false)"> SEM FEIJAO</label>`;

  if (cardapioDia.feijoesEspeciaisAtivos) {
    cardapioDia.feijoesEspeciaisAtivos.forEach(idx => {
      const feijaoEspecial = BANCO_OPCOES.feijoesEspeciais[idx];
      if (feijaoEspecial) {
        htmlFeijao += `<label class="check-item"><input type="radio" name="opcao-feijao" value="${feijaoEspecial}" onchange="alternarModoFeijoada(false)"> ${feijaoEspecial} (Incluso)</label>`;
      }
    });
  }

  htmlFeijao += `<label class="check-item"><input type="radio" name="opcao-feijao" value="Feijao em Pote Separado (145ml)" onchange="alternarModoFeijoada(false)"> Feijao Separado Pote 145ml (+ R$ 3,00)</label>`;
  boxFeijao.innerHTML = htmlFeijao;

  const boxBases = document.getElementById("box-bases-dia");
  boxBases.innerHTML = "";
  
  (cardapioDia.basesAtivas || [0]).forEach((idx, i) => {
    const nome = BANCO_OPCOES.bases[idx];
    if (nome) {
      boxBases.innerHTML += `
        <label class="check-item">
          <input type="radio" name="base-opcao" value="${nome}" ${i === 0 ? 'checked' : ''}> ${nome}
        </label>
      `;
    }
  });

  boxBases.innerHTML += `
    <label class="check-item">
      <input type="radio" name="base-opcao" value="SEM ARROZ"> SEM ARROZ
    </label>
  `;

  const boxCarnes = document.getElementById("box-carnes-dia");
  boxCarnes.innerHTML = "";
  (cardapioDia.carnesAtivas || [0]).forEach(idx => {
    const nome = BANCO_OPCOES.carnes[idx];
    if (nome) {
      if (nome.toLowerCase().includes("panqueca")) {
        boxCarnes.innerHTML += `
          <div style="margin: 6px 0; padding: 6px; background: #fff3cd; border-radius: 4px;">
            <label class="check-item" style="font-weight:bold;">
              <input type="checkbox" name="carne-opcao" value="${nome}"> ${nome}
            </label>
            <div style="margin-left: 20px; font-size: 0.85rem; color: #856404; margin-top: 4px;">
              Recheio: 
              <label style="margin-right:8px;"><input type="radio" name="sabor-panqueca-marmita" value="Só Frango" checked> Só Frango</label>
              <label style="margin-right:8px;"><input type="radio" name="sabor-panqueca-marmita" value="Só Carne"> Só Carne</label>
              <label><input type="radio" name="sabor-panqueca-marmita" value="Mista"> Mista</label>
            </div>
          </div>
        `;
      } else {
        boxCarnes.innerHTML += `
          <label class="check-item">
            <input type="checkbox" name="carne-opcao" value="${nome}"> ${nome}
          </label>
        `;
      }
    }
  });

  const boxGuarnicoes = document.getElementById("box-guarnicoes-dia");
  boxGuarnicoes.innerHTML = "";
  (cardapioDia.guarnicoesAtivas || [0]).forEach(idx => {
    const nome = BANCO_OPCOES.guarnicoes[idx];
    if (nome) {
      boxGuarnicoes.innerHTML += `
        <label class="check-item">
          <input type="checkbox" name="guarnicao-opcao" value="${nome}"> ${nome}
        </label>
      `;
    }
  });

  const boxSalada = document.getElementById("box-salada-dia");
  if (cardapioDia.saladaAtiva) {
    const descSalada = cardapioDia.saladaDiaDesc || "Salada Mista da Casa";
    boxSalada.parentNode.style.display = "block";
    boxSalada.innerHTML = `
      <label class="check-item"><input type="radio" name="opcao-salada" value="SEM SALADA" checked> SEM SALADA (R$ 0,00)</label>
      <label class="check-item"><input type="radio" name="opcao-salada" value="Salada Pequena (${descSalada}) (+ R$ 1,00)"> Salada Pequena: ${descSalada} (+ R$ 1,00)</label>
      <label class="check-item"><input type="radio" name="opcao-salada" value="Salada Media (${descSalada}) (+ R$ 4,00)"> Salada Média: ${descSalada} (+ R$ 4,00)</label>
    `;
  } else {
    boxSalada.parentNode.style.display = "none";
    boxSalada.innerHTML = `<input type="radio" name="opcao-salada" value="SEM SALADA" checked style="display:none;">`;
  }

  document.getElementById("obs-marmita").value = "";
  document.getElementById("modal-montar").style.display = "flex";
}

function alternarModoFeijoada(isFeijoada) {
  const boxBases = document.getElementById("box-bases-dia");
  const boxCarnes = document.getElementById("box-carnes-dia");
  const boxGuarnicoes = document.getElementById("box-guarnicoes-dia");

  if (isFeijoada) {
    boxBases.style.opacity = "0.5";
    boxCarnes.style.opacity = "0.5";
    boxGuarnicoes.style.opacity = "0.5";
    
    document.querySelectorAll('input[name="base-opcao"], input[name="carne-opcao"], input[name="guarnicao-opcao"]').forEach(i => {
      i.checked = false;
      i.disabled = true;
    });
  } else {
    boxBases.style.opacity = "1";
    boxCarnes.style.opacity = "1";
    boxGuarnicoes.style.opacity = "1";

    document.querySelectorAll('input[name="base-opcao"], input[name="carne-opcao"], input[name="guarnicao-opcao"]').forEach(i => {
      i.disabled = false;
    });

    const primeiraBase = document.querySelector('input[name="base-opcao"]');
    if (primeiraBase) primeiraBase.checked = true;
  }
}

function fecharModalMontar() {
  document.getElementById("modal-montar").style.display = "none";
}

function confirmarMontagemMarmita() {
  const opcaoFeijao = document.querySelector('input[name="opcao-feijao"]:checked').value;
  const isFeijoada = (opcaoFeijao === "FEIJOADA COMPLETA");

  let baseSelec = "Arroz Branco";
  let carnesSelec = [];
  let guarnicoesSelec = [];

  if (isFeijoada) {
    baseSelec = "Arroz Branco";
    carnesSelec = ["Feijoada da Casa"];
    guarnicoesSelec = ["Couve refogada", "Farofa da casa", "Torresmo crocante"];
  } else {
    baseSelec = document.querySelector('input[name="base-opcao"]:checked')?.value || "Arroz Branco";
    
    document.querySelectorAll('input[name="carne-opcao"]:checked').forEach(c => {
      let nomeCarne = c.value;
      if (nomeCarne.toLowerCase().includes("panqueca")) {
        const saborP = document.querySelector('input[name="sabor-panqueca-marmita"]:checked')?.value || "Só Frango";
        nomeCarne += ` (${saborP})`;
      }
      carnesSelec.push(nomeCarne);
    });

    guarnicoesSelec = Array.from(document.querySelectorAll('input[name="guarnicao-opcao"]:checked')).map(g => g.value);

    if (carnesSelec.length > marmitaEmSelecao.maxCarnes) {
      alert(`Atencao: A ${marmitaEmSelecao.nome} permite no maximo ${marmitaEmSelecao.maxCarnes} carne(s)!`);
      return;
    }

    if (guarnicoesSelec.length > marmitaEmSelecao.maxGuarnicoes) {
      alert(`Atencao: A ${marmitaEmSelecao.nome} permite no maximo ${marmitaEmSelecao.maxGuarnicoes} acompanhamento(s)!`);
      return;
    }
  }

  const opcaoSaladaEl = document.querySelector('input[name="opcao-salada"]:checked');
  const opcaoSalada = opcaoSaladaEl ? opcaoSaladaEl.value : "SEM SALADA";
  const obs = document.getElementById("obs-marmita").value;

  let precoFinalMarmita = marmitaEmSelecao.preco;
  
  if (opcaoFeijao.includes("Pote Separado")) {
    precoFinalMarmita += 3.00;
  }
  
  if (opcaoSalada.includes("+ R$ 1,00")) {
    precoFinalMarmita += 1.00;
  } else if (opcaoSalada.includes("+ R$ 4,00")) {
    precoFinalMarmita += 4.00;
  }

  const itemPronto = {
    nome: isFeijoada ? `${marmitaEmSelecao.nome} (Feijoada Completa)` : marmitaEmSelecao.nome,
    preco: precoFinalMarmita,
    detalhes: {
      feijao: opcaoFeijao,
      base: baseSelec,
      carnes: carnesSelec,
      guarnicoes: guarnicoesSelec,
      salada: opcaoSalada,
      obs: obs
    },
    qtd: 1
  };

  carrinho.push(itemPronto);
  fecharModalMontar();
  renderizarCarrinho();
}

function adicionarDireto(nome, preco) {
  if (cardapioDia.statusLoja !== "Aberto") {
    alert("Loja fechada!");
    return;
  }

  carrinho.push({
    nome: nome,
    preco: preco,
    detalhes: null,
    qtd: 1
  });
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const container = document.getElementById("itens-carrinho");
  if (carrinho.length === 0) {
    container.innerHTML = '<p class="carrinho-vazio">Seu carrinho esta vazio. Escolha um prato acima!</p>';
    atualizarTotais();
    return;
  }

  container.innerHTML = "";
  carrinho.forEach((item, idx) => {
    let detalheHtml = "";
    if (item.detalhes) {
      detalheHtml = `
        <div class="detalhes-item-carrinho">
          • ${item.detalhes.feijao}<br>
          • ${item.detalhes.base}<br>
          • Carnes: ${item.detalhes.carnes.join(", ") || "Nenhuma"}<br>
          • Acomp: ${item.detalhes.guarnicoes.join(", ") || "Nenhum"}<br>
          • Salada: ${item.detalhes.salada}
          ${item.detalhes.obs ? `<br>• Obs: ${item.detalhes.obs}` : ''}
        </div>
      `;
    }

    container.innerHTML += `
      <div class="item-carrinho">
        <div>
          <strong>${item.nome}</strong>
          ${detalheHtml}
          <small style="color:#d9381e; font-weight:bold;">R$ ${item.preco.toFixed(2).replace('.', ',')}</small>
        </div>
        <div>
          <button onclick="removerItemCarrinho(${idx})" style="background:#dc3545; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Remover</button>
        </div>
      </div>
    `;
  });

  atualizarTotais();
}

function removerItemCarrinho(index) {
  carrinho.splice(index, 1);
  renderizarCarrinho();
}

function atualizarTotais() {
  const subtotal = carrinho.reduce((acc, i) => acc + (i.preco * i.qtd), 0);
  document.getElementById("txt-subtotal").innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  
  const elTaxa = document.getElementById("txt-taxa");
  if (elTaxa) elTaxa.parentNode.style.display = "none";
  
  document.getElementById("txt-total").innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

function trocarPagamento() {
  const pagamento = document.getElementById("cliente-pagamento").value;
  const boxTroco = document.getElementById("box-troco");

  if (pagamento === "Dinheiro") {
    boxTroco.style.display = "block";
    boxTroco.innerHTML = `
      <label for="cliente-troco">Precisa de troco para quanto?</label>
      <input type="text" id="cliente-troco" placeholder="Ex: Troco para R$ 50,00">
    `;
  } else if (pagamento === "Marcar na Conta") {
    boxTroco.style.display = "block";
    boxTroco.innerHTML = `
      <label for="cliente-troco">Nome do Titular da Conta *</label>
      <input type="text" id="cliente-troco" placeholder="Ex: Conta do Sr. Joao" required>
    `;
  } else {
    boxTroco.style.display = "none";
  }
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Adicione pelo menos um prato ao carrinho!");
    return;
  }

  const nome = document.getElementById("cliente-nome").value;
  const selectEntrega = document.getElementById("cliente-bairro");
  const isRetirada = (selectEntrega.value === "Retirada");
  const endereco = isRetirada ? "Retirada no Balcao" : document.getElementById("cliente-endereco").value;
  const entregaTexto = isRetirada ? "Retirar no Balcao" : "Entrega a Domicilio";
  const pagamento = document.getElementById("cliente-pagamento").value;
  const campoExtra = document.getElementById("cliente-troco") ? document.getElementById("cliente-troco").value : "";

  if (!nome) {
    alert("Preencha seu nome!");
    return;
  }

  if (!isRetirada && !endereco) {
    alert("Preencha seu endereco de entrega!");
    return;
  }

  if (pagamento === "Marcar na Conta" && !campoExtra) {
    alert("Preencha o nome do titular da conta!");
    return;
  }

  const subtotal = carrinho.reduce((acc, i) => acc + (i.preco * i.qtd), 0);

  let textoItens = "";
  carrinho.forEach((item, i) => {
    textoItens += `*${i+1}. ${item.nome}* - R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
    if (item.detalhes) {
      if (item.detalhes.feijao) textoItens += `   - ${item.detalhes.feijao}\n`;
      if (item.detalhes.base) textoItens += `   - ${item.detalhes.base}\n`;
      if (item.detalhes.carnes && item.detalhes.carnes.length > 0) {
        item.detalhes.carnes.forEach(c => textoItens += `   - ${c}\n`);
      }
      if (item.detalhes.guarnicoes && item.detalhes.guarnicoes.length > 0) {
        item.detalhes.guarnicoes.forEach(g => textoItens += `   - ${g}\n`);
      }
      if (item.detalhes.salada) textoItens += `   - Salada: ${item.detalhes.salada}\n`;
      if (item.detalhes.obs) textoItens += `   - Obs: ${item.detalhes.obs}\n`;
    }
    textoItens += `\n`;
  });

  let msg = `*NOVO PEDIDO - ROTISSERIA CASTELLO*\n\n`;
  msg += `*ITENS DO PEDIDO:*\n${textoItens}`;
  msg += `*Tipo de Pedido:* ${entregaTexto}\n`;
  msg += `*TOTAL DO PEDIDO:* *R$ ${subtotal.toFixed(2).replace('.', ',')}*\n\n`;
  msg += `*DADOS DO CLIENTE:*\n`;
  msg += `*Nome:* ${nome}\n`;
  if (!isRetirada) msg += `*Endereco:* ${endereco}\n`;
  
  if (pagamento === "Marcar na Conta") {
    msg += `*Forma de Pagamento:* Marcar na Conta (Titular: ${campoExtra})\n`;
  } else {
    msg += `*Forma de Pagamento:* ${pagamento}\n`;
  }

  if (pagamento === "Dinheiro" && campoExtra) msg += `*Troco para:* ${campoExtra}\n`;
  if (pagamento === "Pix") msg += `\n*Chave Pix (CNPJ):* ${CONFIG.chavePix}\n`;

  window.open(`https://wa.me/${CONFIG.telefoneWhatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
}

function abrirAdmin() {
  const senha = prompt("Senha do Painel:");
  if (senha === CONFIG.senhaAdmin) {
    document.getElementById("admin-status").value = cardapioDia.statusLoja;

    let checkFitAdmin = document.getElementById("admin-check-fit");
    let inputFitDesc = document.getElementById("admin-desc-fit");
    if (!checkFitAdmin) {
      const parent = document.getElementById("admin-status").parentNode;
      
      const labelCheckFit = document.createElement("label");
      labelCheckFit.style.display = "block";
      labelCheckFit.style.marginTop = "12px";
      labelCheckFit.style.marginBottom = "5px";
      labelCheckFit.innerHTML = `<input type="checkbox" id="admin-check-fit"> <strong>Disponibilizar Marmitinha Fit Hoje (R$ 17,50)</strong>`;
      
      const labelDescFit = document.createElement("label");
      labelDescFit.style.display = "block";
      labelDescFit.style.fontSize = "0.85rem";
      labelDescFit.style.marginBottom = "10px";
      labelDescFit.innerHTML = `O que vem na Fit hoje:<br><input type="text" id="admin-desc-fit" style="width:100%; padding:6px; margin-top:3px;" placeholder="Ex: Frango Grelhado, Arroz Integral e Legumes">`;

      parent.appendChild(labelCheckFit);
      parent.appendChild(labelDescFit);
      checkFitAdmin = document.getElementById("admin-check-fit");
      inputFitDesc = document.getElementById("admin-desc-fit");
    }
    checkFitAdmin.checked = cardapioDia.fitAtiva !== false;
    inputFitDesc.value = cardapioDia.fitDesc || "";

    let checkComboPAdmin = document.getElementById("admin-check-combop");
    if (!checkComboPAdmin) {
      const parent = document.getElementById("admin-status").parentNode;
      const labelCheckP = document.createElement("label");
      labelCheckP.style.display = "block";
      labelCheckP.style.marginTop = "10px";
      labelCheckP.style.marginBottom = "8px";
      labelCheckP.innerHTML = `<input type="checkbox" id="admin-check-combop"> <strong>Disponibilizar COMBO DE PANQUECAS Hoje (R$ 30,00)</strong>`;
      
      parent.appendChild(labelCheckP);
      checkComboPAdmin = document.getElementById("admin-check-combop");
    }
    checkComboPAdmin.checked = cardapioDia.comboPanquecaAtivo !== false;

    let checkFeijoadaAdmin = document.getElementById("admin-check-feijoada");
    if (!checkFeijoadaAdmin) {
      const parent = document.getElementById("admin-status").parentNode;
      const labelCheckF = document.createElement("label");
      labelCheckF.style.display = "block";
      labelCheckF.style.marginTop = "10px";
      labelCheckF.style.marginBottom = "8px";
      labelCheckF.innerHTML = `<input type="checkbox" id="admin-check-feijoada"> <strong>Disponibilizar FEIJOADA COMPLETA Hoje</strong>`;
      
      parent.appendChild(labelCheckF);
      checkFeijoadaAdmin = document.getElementById("admin-check-feijoada");
    }
    checkFeijoadaAdmin.checked = cardapioDia.feijoadaAtiva === true;

    let checkSaladaAdmin = document.getElementById("admin-check-salada");
    if (!checkSaladaAdmin) {
      const campoSalada = document.getElementById("admin-desc-salada");
      const parent = campoSalada.parentNode;

      const labelCheck = document.createElement("label");
      labelCheck.style.display = "block";
      labelCheck.style.marginBottom = "8px";
      labelCheck.innerHTML = `<input type="checkbox" id="admin-check-salada"> <strong>Disponibilizar Opções de Salada Hoje</strong>`;
      
      parent.insertBefore(labelCheck, campoSalada);
      checkSaladaAdmin = document.getElementById("admin-check-salada");
    }

    checkSaladaAdmin.checked = cardapioDia.saladaAtiva !== false;
    document.getElementById("admin-desc-salada").value = cardapioDia.saladaDiaDesc || "";

    // CHECKBOX SUGESTÃO DO CHEF
    let checkSugestaoAdmin = document.getElementById("admin-check-sugestao");
    if (!checkSugestaoAdmin) {
      const campoSugestao = document.getElementById("admin-desc-sugestao");
      const parent = campoSugestao.parentNode;

      const labelCheckS = document.createElement("label");
      labelCheckS.style.display = "block";
      labelCheckS.style.marginBottom = "8px";
      labelCheckS.innerHTML = `<input type="checkbox" id="admin-check-sugestao"> <strong>Disponibilizar SUGESTÃO DO CHEF Hoje (R$ 23,00)</strong>`;
      
      parent.insertBefore(labelCheckS, parent.firstChild);
      checkSugestaoAdmin = document.getElementById("admin-check-sugestao");
    }
    checkSugestaoAdmin.checked = cardapioDia.sugestaoAtiva !== false;

    let selectSugestaoAdmin = document.getElementById("admin-select-sugestao");
    if (!selectSugestaoAdmin) {
      const campoSugestao = document.getElementById("admin-desc-sugestao");
      const parent = campoSugestao.parentNode;

      const labelSelectS = document.createElement("label");
      labelSelectS.innerHTML = "<strong>Escolha a Sugestão do Chef:</strong>";
      labelSelectS.style.display = "block";

      selectSugestaoAdmin = document.createElement("select");
      selectSugestaoAdmin.id = "admin-select-sugestao";
      selectSugestaoAdmin.style.marginBottom = "8px";
      selectSugestaoAdmin.onchange = function() {
        if (this.value !== "") {
          document.getElementById("admin-desc-sugestao").value = this.value;
        }
      };

      parent.insertBefore(labelSelectS, campoSugestao);
      parent.insertBefore(selectSugestaoAdmin, campoSugestao);
    }

    selectSugestaoAdmin.innerHTML = `<option value="">-- Selecione uma Sugestao da Lista --</option>`;
    BANCO_SUGESTOES.forEach(s => {
      selectSugestaoAdmin.innerHTML += `<option value="${s}">${s}</option>`;
    });

    document.getElementById("admin-desc-sugestao").value = cardapioDia.sugestaoChef;
    document.getElementById("admin-img-sugestao").value = cardapioDia.sugestaoImg || "";

    // CHECKBOX ESPECIAL DO DIA
    let checkEspecialAdmin = document.getElementById("admin-check-especial");
    if (!checkEspecialAdmin) {
      const campoEspecial = document.getElementById("admin-desc-especial");
      const parent = campoEspecial.parentNode;

      const labelCheckE = document.createElement("label");
      labelCheckE.style.display = "block";
      labelCheckE.style.marginTop = "12px";
      labelCheckE.style.marginBottom = "8px";
      labelCheckE.innerHTML = `<input type="checkbox" id="admin-check-especial"> <strong>Disponibilizar ESPECIAL DO DIA Hoje (R$ 33,00)</strong>`;
      
      parent.insertBefore(labelCheckE, parent.firstChild);
      checkEspecialAdmin = document.getElementById("admin-check-especial");
    }
    checkEspecialAdmin.checked = cardapioDia.especialAtivo !== false;

    let selectEspecialAdmin = document.getElementById("admin-select-especial");
    if (!selectEspecialAdmin) {
      const campoEspecial = document.getElementById("admin-desc-especial");
      const parent = campoEspecial.parentNode;
      
      const labelSelect = document.createElement("label");
      labelSelect.innerHTML = "<strong>Escolha o Especial de Hoje (R$ 33,00):</strong>";
      labelSelect.style.display = "block";
      labelSelect.style.marginTop = "10px";

      selectEspecialAdmin = document.createElement("select");
      selectEspecialAdmin.id = "admin-select-especial";
      selectEspecialAdmin.style.marginBottom = "8px";
      selectEspecialAdmin.onchange = function() {
        const val = parseInt(this.value);
        if (val >= 0) {
          document.getElementById("admin-desc-especial").value = BANCO_ESPECIAIS[val].desc;
          document.getElementById("admin-img-especial").value = BANCO_ESPECIAIS[val].img;
        }
      };

      parent.insertBefore(labelSelect, campoEspecial);
      parent.insertBefore(selectEspecialAdmin, campoEspecial);
    }

    selectEspecialAdmin.innerHTML = `<option value="-1">-- Selecione um Especial da Lista --</option>`;
    BANCO_ESPECIAIS.forEach((e, idx) => {
      selectEspecialAdmin.innerHTML += `<option value="${idx}">${e.nome}</option>`;
    });

    document.getElementById("admin-desc-especial").value = cardapioDia.especialDia;
    document.getElementById("admin-img-especial").value = cardapioDia.especialImg || "";

    let boxFeijoesAdmin = document.getElementById("admin-box-feijoes");
    if (!boxFeijoesAdmin) {
      const containerBases = document.getElementById("admin-box-bases");
      const subTitle = document.createElement("h3");
      subTitle.innerHTML = "Feijoes Especiais do Dia:";
      boxFeijoesAdmin = document.createElement("div");
      boxFeijoesAdmin.id = "admin-box-feijoes";
      boxFeijoesAdmin.className = "grid-checkboxes-admin";
      containerBases.parentNode.insertBefore(subTitle, containerBases);
      containerBases.parentNode.insertBefore(boxFeijoesAdmin, containerBases);
    }

    boxFeijoesAdmin.innerHTML = "";
    BANCO_OPCOES.feijoesEspeciais.forEach((f, idx) => {
      const checked = (cardapioDia.feijoesEspeciaisAtivos || []).includes(idx) ? 'checked' : '';
      boxFeijoesAdmin.innerHTML += `<label class="check-item"><input type="checkbox" name="adm-feijao" value="${idx}" ${checked}> ${f}</label>`;
    });

    const boxBases = document.getElementById("admin-box-bases");
    boxBases.innerHTML = "";
    BANCO_OPCOES.bases.forEach((b, idx) => {
      const checked = (cardapioDia.basesAtivas || []).includes(idx) ? 'checked' : '';
      boxBases.innerHTML += `<label class="check-item"><input type="checkbox" name="adm-base" value="${idx}" ${checked}> ${b}</label>`;
    });

    const boxCarnes = document.getElementById("admin-box-carnes");
    boxCarnes.innerHTML = "";
    BANCO_OPCOES.carnes.forEach((c, idx) => {
      const checked = (cardapioDia.carnesAtivas || []).includes(idx) ? 'checked' : '';
      boxCarnes.innerHTML += `<label class="check-item"><input type="checkbox" name="adm-carne" value="${idx}" ${checked}> ${c}</label>`;
    });

    const boxGuarnicoes = document.getElementById("admin-box-guarnicoes");
    boxGuarnicoes.innerHTML = "";
    BANCO_OPCOES.guarnicoes.forEach((g, idx) => {
      const checked = (cardapioDia.guarnicoesAtivas || []).includes(idx) ? 'checked' : '';
      boxGuarnicoes.innerHTML += `<label class="check-item"><input type="checkbox" name="adm-guarnicao" value="${idx}" ${checked}> ${g}</label>`;
    });

    document.getElementById("modal-admin").style.display = "flex";
  } else if (senha !== null) {
    alert("Senha incorreta!");
  }
}

function fecharAdmin() {
  document.getElementById("modal-admin").style.display = "none";
}

// SALVA NA NUVEM PARA TODOS OS DISPOSITIVOS SIMULTANEAMENTE
function salvarDadosAdmin(event) {
  event.preventDefault();

  cardapioDia.statusLoja = document.getElementById("admin-status").value;
  
  const checkFit = document.getElementById("admin-check-fit");
  const inputFit = document.getElementById("admin-desc-fit");
  cardapioDia.fitAtiva = checkFit ? checkFit.checked : true;
  cardapioDia.fitDesc = inputFit ? inputFit.value : "";

  const checkComboP = document.getElementById("admin-check-combop");
  cardapioDia.comboPanquecaAtivo = checkComboP ? checkComboP.checked : true;

  const checkSugestao = document.getElementById("admin-check-sugestao");
  cardapioDia.sugestaoAtiva = checkSugestao ? checkSugestao.checked : true;

  const checkEspecial = document.getElementById("admin-check-especial");
  cardapioDia.especialAtivo = checkEspecial ? checkEspecial.checked : true;

  cardapioDia.feijoadaAtiva = document.getElementById("admin-check-feijoada").checked;
  cardapioDia.saladaAtiva = document.getElementById("admin-check-salada").checked;
  cardapioDia.saladaDiaDesc = document.getElementById("admin-desc-salada").value;
  cardapioDia.sugestaoChef = document.getElementById("admin-desc-sugestao").value;
  cardapioDia.sugestaoImg = document.getElementById("admin-img-sugestao").value;
  
  const selectEspecial = document.getElementById("admin-select-especial");
  const idxEspecial = selectEspecial ? parseInt(selectEspecial.value) : -1;
  if (idxEspecial >= 0) {
    cardapioDia.especialNome = BANCO_ESPECIAIS[idxEspecial].nome;
  }

  cardapioDia.especialDia = document.getElementById("admin-desc-especial").value;
  cardapioDia.especialImg = document.getElementById("admin-img-especial").value;

  cardapioDia.feijoesEspeciaisAtivos = Array.from(document.querySelectorAll('input[name="adm-feijao"]:checked')).map(i => parseInt(i.value));
  cardapioDia.basesAtivas = Array.from(document.querySelectorAll('input[name="adm-base"]:checked')).map(i => parseInt(i.value));
  cardapioDia.carnesAtivas = Array.from(document.querySelectorAll('input[name="adm-carne"]:checked')).map(i => parseInt(i.value));
  cardapioDia.guarnicoesAtivas = Array.from(document.querySelectorAll('input[name="adm-guarnicao"]:checked')).map(i => parseInt(i.value));

  database.ref("cardapioDia").set(cardapioDia)
    .then(() => {
      fecharAdmin();
      alert("Cardápio do dia atualizado EM TEMPO REAL para todos os computadores e clientes!");
    })
    .catch((error) => {
      alert("Erro ao salvar na nuvem: " + error.message);
    });
}