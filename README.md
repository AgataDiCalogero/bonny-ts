# Bonny TypeScript

**Gestione incentivi sportivi con type safety rigoroso**

---

## 🎯 Overview & Scopo

Implementazione TypeScript del sistema **Bonny** per la gestione degli incentivi destinati alle startup nel settore sportivo. Il progetto modella il flusso di assegnazione dei bonus statali, la partecipazione dei cittadini alle attività e il tracking delle interazioni.

**Target**: startup innovative del settore sport, cittadini beneficiari, enti erogatori

**Caratteristiche chiave**: type safety rigoroso, architettura pulita, logging completo dei flussi

---

## ✨ Requisiti Implementati

- **3 interfacce fondamentali**: IStartup, IIncentivo, ICittadino
- **3 classi concrete**: Startup, Incentivo, Cittadino (mapping 1:1 con interfacce)
- **Metodi core**: riceviIncentivo, assegnaAStartup, partecipaAttivita
- **Demo funzionale**: 2 startup, 2 incentivi, 1 cittadino con flussi completi
- **Strict TypeScript**: nessun any implicito, tipi espliciti ovunque
- **Naming ASCII**: convenzioni coerenti e compatibili internazionalmente

---

## 🏗️ Architettura & Modelli

| Interface  | Classe    | Proprietà Chiave                                              | Metodi              |
|------------|-----------|---------------------------------------------------------------|---------------------|
| IStartup   | Startup   | nome, settoreDiFocus, descrizione, prodottiServiziOfferti   | riceviIncentivo()   |
| IIncentivo | Incentivo | codiceIdentificativo, valoreIncentivo, criteriEleggibilita   | assegnaAStartup()   |
| ICittadino | Cittadino | nome, cognome, eta, interessiSportivi                        | partecipaAttivita() |

**Pattern utilizzati**:
- Interface segregation per contratti puliti
- Readonly getters per stato immutabile verso l'esterno
- Single Responsibility per ogni classe

---

## 🚀 Esecuzione Locale

**Prerequisiti**: Node.js 16+, npm/npx

**Comandi**:
```bash
npx tsc
node dist/main.js
```

Il primo comando compila TypeScript in JavaScript, il secondo esegue il programma e mostra i log dei flussi.

---

## 🌐 Demo Online (CodePen)

1. Apri CodePen, crea nuovo Pen
2. In Settings → JS → Preprocessor: seleziona **TypeScript**
3. Copia il contenuto di `src/` nei rispettivi pannelli
4. **Apri la Console** per vedere i log di esecuzione

**Link demo**: [CodePen](https://codepen.io/AgataDiCalogero/pen/wBKpbax)

---

## 📊 Output Atteso

Eseguendo il programma, la console mostra questa sequenza di log:

```
MotionWear ha ricevuto l'incentivo BONUSFIT100
Incentivo BONUSFIT100 assegnato a MotionWear
FitLife ha ricevuto l'incentivo SPORTPASS200
Incentivo SPORTPASS200 assegnato a FitLife
Giulia Bianchi partecipa ad attività di MotionWear
Giulia Bianchi partecipa ad attività di FitLife
Incentivi s1: [ 'BONUSFIT100' ]
Incentivi s2: [ 'SPORTPASS200' ]
Attività cittadino: [ 'MotionWear', 'FitLife' ]
```

Ogni riga traccia un'azione specifica: ricezione incentivi, assegnazioni, partecipazioni e stato finale.

---

## 🧠 Scelte Progettuali & Perché

**Strict mode TypeScript**: prevenzione errori runtime, IntelliSense potenziato, manutenibilità

**Tipi espliciti**: leggibilità del codice, documentazione integrata, refactoring sicuro

**Naming ASCII**: compatibilità internazionale, deploy pulito su piattaforme web

**Readonly getters**: incapsulamento dello stato interno, API immutabile per il consumatore

**SRP (Single Responsibility)**: ogni classe ha una sola ragione di cambiare, testing semplificato

---

## 📁 Struttura Progetto

```
bonny-ts/
├── src/
│   ├── interfaces/
│   │   ├── ICittadino.ts
│   │   ├── IIncentivo.ts
│   │   └── IStartup.ts
│   ├── models/
│   │   ├── Cittadino.ts
│   │   ├── Incentivo.ts
│   │   └── Startup.ts
│   └── main.ts
├── dist/ (generato)
├── tsconfig.json
└── package.json
```

---

## ✅ Stato & Definition of Done

- **Interfacce definite** e mappate 1:1 con classi concrete
- **Type safety** completo senza any impliciti
- **Flussi core** implementati e testati
- **Logging** completo di tutte le operazioni
- **Build pulita** senza errori TypeScript
- **Demo funzionale** con istanze multiple
- **Documentazione** completa e deployment-ready

---

## 🔗 Link

- **Demo live**: [CodePen](https://codepen.io/AgataDiCalogero/pen/wBKpbax)
