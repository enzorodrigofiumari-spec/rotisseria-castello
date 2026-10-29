const CONFIG = {
  telefoneWhatsapp: "5516997658154",
  chavePix: "21.878.140/0001-37 (CNPJ)",
  senhaAdmin: "1234"
};

// LISTA FIXA DE SUGESTÕES DO CHEF (R$ 23,00)
const BANCO_SUGESTOES = [
  "Macarrao alho e oleo com tomate seco e rucula",
  "Hamburguer a Cavalo (marmitex redondo 500ml)",
  "Nhoque com frango grelhado",
  "Especial de panqueca de frango",
  "Especial de panqueca de carne",
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
  { nome: "Iscas Contra Filé à Moda", desc: "Iscas de Contra Filé c/ tomate, cebola e molho 4 queijos + Arroz Branco + Batata Frita", img: "img/iscas-contra-file-moda.png" }
];

// BANCO DE DADOS COMPLETO E ORGANIZADO
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
    "Costelinha suina assada",
    "Estrogonofe de carne",
    "Estrogonofe de frango",
    "Feijoada da Casa",
    "File de frango a milanesa",
    "File de frango acebolado",
    "File de frango grelhado",
    "File de peixe a milanesa",
    "Frango a passarinho",
    "Frango cremoso",
    "Frango refogado ao molho",
    "Fricasse de frango com batata palha",
    "Iscas de frango com bacon e requeijao",
    "Iscas de frango crocante",
    "Linguica recheada com vinagrete e queijo",
    "Linguica toscana acebolada",
    "Lombo assado ao molho madeira",
    "Panqueca de carne ou frango",
    "Pernil na panela",
    "Picadinho de frango com mostarda e legumes",
    "Ponta de peito assada ao molho",
    "Quibe assado recheado",
    "Sobrecoxa de frango assada",
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
    "Chica doida (creme de milho com queijo e bacon)",
    "Chuchu com molho branco e ricota",
    "Couve refogada",
    "Espaguete ao molho de tomate",
    "Espaguete alho e oleo",
    "Farofa da casa",
    "Farofa de milho com legumes",
    "Fettuccine ao molho de calabresa",
    "Jilo frito",
    "Legumes a saute",
    "Macarrao com molho branco e parmesao",
    "Mandioca frita",
    "Mix / Seleta de legumes",
    "Ovo frito",
    "Polenta ao molho",
    "Repolho refogado com tomate",
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
  saladaAtiva: true,
  saladaDiaDesc: "Alface, Tomate e Maionese de Batata",
  sugestaoChef: "Nhoque com frango grelhado",
  sugestaoImg: "img/sugestao.png",
  especialNome: "Contra File a Parmegiana",
  especialDia: "2 Bifes Contra File a Parmegiana (sem gordura) + Arroz Branco + Batata Frita",
  especialImg: "img/contra-file-parmegiana.png",
  feijoesEspeciaisAtivos: [0, 1],
  basesAtivas: [0, 1],
  carnesAtivas: [1, 11, 16],
  guarnicoesAtivas: [5, 13, 16]
};

let cardapioDia = { ...CARDAPIO_DEFAULT };
let carrinho = [];
let marmitaEmSelecao = null;

document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  renderizarMarmitasCards();
  atualizarInterface();
  configurarOpcaoPagamentoConta();
  document.getElementById("btn-admin").addEventListener("click", abrirAdmin);
  
  const selectEntrega = document.getElementById("cliente-bairro");
  if (selectEntrega) {
    selectEntrega.addEventListener("change", alternarExibicaoEndereco);
  }
});

function carregarDados() {
  try {
    const salvos = localStorage.getItem("rotisseria_castello_v17");
    if (salvos) {
      cardapioDia = JSON.parse(salvos);
    }
  } catch (e) {
    cardapioDia = { ...CARDAPIO_DEFAULT };
  }
}

// CONFIGURAR OPÇÃO "MARCAR NA CONTA" NO SELECT DE PAGAMENTO
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
  document.getElementById("desc-sugestao").innerText = cardapioDia.sugestaoChef || CARDAPIO_DEFAULT.sugestaoChef;
  document.getElementById("desc-especial").innerText = (cardapioDia.especialNome ? cardapioDia.especialNome + ": " : "") + (cardapioDia.especialDia || CARDAPIO_DEFAULT.especialDia);
  
  if (cardapioDia.sugestaoImg) document.getElementById("img-sugestao").src = cardapioDia.sugestaoImg;
  if (cardapioDia.especialImg) document.getElementById("img-especial").src = cardapioDia.especialImg;

  const statusElement = document.getElementById("status-loja");
  if (cardapioDia.statusLoja === "Aberto") {
    statusElement.className = "badge badge-aberto";
    statusElement.innerText = "Aberto para Pedidos";
  } else {
    statusElement.className = "badge badge-fechado";
    statusElement.innerText = "Fechado no Momento";
  }
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

  // APENAS EXIBE A FEIJOADA COMPLETA SE ESTIVER ATIVADA NO PAINEL DO DONO
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
      boxCarnes.innerHTML += `
        <label class="check-item">
          <input type="checkbox" name="carne-opcao" value="${nome}"> ${nome}
        </label>
      `;
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

  // RENDERIZAR OPÇÃO DE SALADA (COBRADA À PARTE SE ATIVA NO PAINEL)
  const boxSalada = document.getElementById("box-salada-dia");
  if (cardapioDia.saladaAtiva) {
    const descSalada = cardapioDia.saladaDiaDesc || "Salada Mista da Casa";
    boxSalada.parentNode.style.display = "block";
    boxSalada.innerHTML = `
      <label class="check-item"><input type="radio" name="opcao-salada" value="SEM SALADA" checked> SEM SALADA (R$ 0,00)</label>
      <label class="check-item"><input type="radio" name="opcao-salada" value="Com Salada do Dia (+ R$ 3,00)"> Com Salada de Hoje: ${descSalada} (+ R$ 3,00)</label>
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
    carnesSelec = Array.from(document.querySelectorAll('input[name="carne-opcao"]:checked')).map(c => c.value);
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
  
  if (opcaoSalada.includes("+ R$ 3,00")) {
    precoFinalMarmita += 3.00;
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

// PAINEL DO DONO (ADMIN)
function abrirAdmin() {
  const senha = prompt("Senha do Painel:");
  if (senha === CONFIG.senhaAdmin) {
    document.getElementById("admin-status").value = cardapioDia.statusLoja;

    // Checkbox da Feijoada Completa
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

    // Checkbox da Salada
    let checkSaladaAdmin = document.getElementById("admin-check-salada");
    if (!checkSaladaAdmin) {
      const campoSalada = document.getElementById("admin-desc-salada");
      const parent = campoSalada.parentNode;

      const labelCheck = document.createElement("label");
      labelCheck.style.display = "block";
      labelCheck.style.marginBottom = "8px";
      labelCheck.innerHTML = `<input type="checkbox" id="admin-check-salada"> <strong>Disponibilizar Salada Hoje (+ R$ 3,00)</strong>`;
      
      parent.insertBefore(labelCheck, campoSalada);
      checkSaladaAdmin = document.getElementById("admin-check-salada");
    }

    checkSaladaAdmin.checked = cardapioDia.saladaAtiva !== false;
    document.getElementById("admin-desc-salada").value = cardapioDia.saladaDiaDesc || "";

    // Seletor de Sugestões do Chef
    let selectSugestaoAdmin = document.getElementById("admin-select-sugestao");
    if (!selectSugestaoAdmin) {
      const campoSugestao = document.getElementById("admin-desc-sugestao");
      const parent = campoSugestao.parentNode;

      const labelSelectS = document.createElement("label");
      labelSelectS.innerHTML = "<strong>Escolha a Sugestão do Chef (R$ 23,00):</strong>";
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

    // Seletor dos Especiais
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

function salvarDadosAdmin(event) {
  event.preventDefault();

  cardapioDia.statusLoja = document.getElementById("admin-status").value;
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

  localStorage.setItem("rotisseria_castello_v17", JSON.stringify(cardapioDia));

  atualizarInterface();
  fecharAdmin();
  alert("Cardapio do dia atualizado com sucesso!");
}