const exercisePool = [
  { latex: '7{,}3', plain: '7,3', type: 'Decimal exacto', numerator: 73, denominator: 10, allDigits: '73', decimalDigits: 1, maxSteps: ['N=7{,}3', '10N=73', 'N=\\frac{73}{10}'] },
  { latex: '2{,}\\overline{5}', plain: '2,5 periódico', type: 'Periódico puro', numerator: 23, denominator: 9, allDigits: '25', beforePeriod: '2', periodDigits: 1, maxSteps: ['N=2{,}\\overline{5}', '10N=25{,}\\overline{5}', '10N-N=25{,}\\overline{5}-2{,}\\overline{5}', '9N=23', 'N=\\frac{23}{9}'] },
  { latex: '12{,}7\\overline{13}', plain: '12,7 periódico 13', type: 'Periódico mixto', numerator: 6293, denominator: 495, allDigits: '12713', beforePeriod: '127', periodDigits: 2, nonRepeatingDigits: 1, maxSteps: ['N=12{,}7\\overline{13}', '1000N=12713{,}\\overline{13}', '10N=127{,}\\overline{13}', '1000N-10N=12713{,}\\overline{13}-127{,}\\overline{13}', '990N=12586', 'N=\\frac{12586}{990}=\\frac{6293}{495}'] },
  { latex: '0{,}125', plain: '0,125', type: 'Decimal exacto', numerator: 1, denominator: 8, allDigits: '125', decimalDigits: 3, maxSteps: ['N=0{,}125', '1000N=125', 'N=\\frac{125}{1000}=\\frac{1}{8}'] },
  { latex: '3{,}\\overline{27}', plain: '3,27 periódico', type: 'Periódico puro', numerator: 36, denominator: 11, allDigits: '327', beforePeriod: '3', periodDigits: 2, maxSteps: ['N=3{,}\\overline{27}', '100N=327{,}\\overline{27}', '100N-N=327{,}\\overline{27}-3{,}\\overline{27}', '99N=324', 'N=\\frac{324}{99}=\\frac{36}{11}'] },
  { latex: '1{,}2\\overline{34}', plain: '1,2 periódico 34', type: 'Periódico mixto', numerator: 611, denominator: 495, allDigits: '1234', beforePeriod: '12', periodDigits: 2, nonRepeatingDigits: 1, maxSteps: ['N=1{,}2\\overline{34}', '1000N=1234{,}\\overline{34}', '10N=12{,}\\overline{34}', '1000N-10N=1234{,}\\overline{34}-12{,}\\overline{34}', '990N=1222', 'N=\\frac{1222}{990}=\\frac{611}{495}'] },
  { latex: '4{,}06', plain: '4,06', type: 'Decimal exacto', numerator: 203, denominator: 50, allDigits: '406', decimalDigits: 2, maxSteps: ['N=4{,}06', '100N=406', 'N=\\frac{406}{100}=\\frac{203}{50}'] },
  { latex: '12{,}04', plain: '12,04', type: 'Decimal exacto', numerator: 301, denominator: 25, allDigits: '1204', decimalDigits: 2, maxSteps: ['N=12{,}04', '100N=1204', 'N=\\frac{1204}{100}=\\frac{301}{25}'] },
  { latex: '6{,}75', plain: '6,75', type: 'Decimal exacto', numerator: 27, denominator: 4, allDigits: '675', decimalDigits: 2, maxSteps: ['N=6{,}75', '100N=675', 'N=\\frac{675}{100}=\\frac{27}{4}'] },
  { latex: '0{,}48', plain: '0,48', type: 'Decimal exacto', numerator: 12, denominator: 25, allDigits: '48', decimalDigits: 2, maxSteps: ['N=0{,}48', '100N=48', 'N=\\frac{48}{100}=\\frac{12}{25}'] },
  { latex: '1{,}\\overline{6}', plain: '1,6 periódico', type: 'Periódico puro', numerator: 5, denominator: 3, allDigits: '16', beforePeriod: '1', periodDigits: 1, maxSteps: ['N=1{,}\\overline{6}', '10N=16{,}\\overline{6}', '10N-N=16{,}\\overline{6}-1{,}\\overline{6}', '9N=15', 'N=\\frac{15}{9}=\\frac{5}{3}'] },
  { latex: '0{,}\\overline{45}', plain: '0,45 periódico', type: 'Periódico puro', numerator: 5, denominator: 11, allDigits: '45', beforePeriod: '0', periodDigits: 2, maxSteps: ['N=0{,}\\overline{45}', '100N=45{,}\\overline{45}', '100N-N=45{,}\\overline{45}-0{,}\\overline{45}', '99N=45', 'N=\\frac{45}{99}=\\frac{5}{11}'] },
  { latex: '5{,}\\overline{18}', plain: '5,18 periódico', type: 'Periódico puro', numerator: 57, denominator: 11, allDigits: '518', beforePeriod: '5', periodDigits: 2, maxSteps: ['N=5{,}\\overline{18}', '100N=518{,}\\overline{18}', '100N-N=518{,}\\overline{18}-5{,}\\overline{18}', '99N=513', 'N=\\frac{513}{99}=\\frac{57}{11}'] },
  { latex: '7{,}\\overline{24}', plain: '7,24 periódico', type: 'Periódico puro', numerator: 239, denominator: 33, allDigits: '724', beforePeriod: '7', periodDigits: 2, maxSteps: ['N=7{,}\\overline{24}', '100N=724{,}\\overline{24}', '100N-N=724{,}\\overline{24}-7{,}\\overline{24}', '99N=717', 'N=\\frac{717}{99}=\\frac{239}{33}'] },
  { latex: '0{,}1\\overline{6}', plain: '0,1 periódico 6', type: 'Periódico mixto', numerator: 1, denominator: 6, allDigits: '16', beforePeriod: '1', periodDigits: 1, nonRepeatingDigits: 1, maxSteps: ['N=0{,}1\\overline{6}', '100N=16{,}\\overline{6}', '10N=1{,}\\overline{6}', '100N-10N=16{,}\\overline{6}-1{,}\\overline{6}', '90N=15', 'N=\\frac{15}{90}=\\frac{1}{6}'] },
  { latex: '4{,}2\\overline{5}', plain: '4,2 periódico 5', type: 'Periódico mixto', numerator: 383, denominator: 90, allDigits: '425', beforePeriod: '42', periodDigits: 1, nonRepeatingDigits: 1, maxSteps: ['N=4{,}2\\overline{5}', '100N=425{,}\\overline{5}', '10N=42{,}\\overline{5}', '100N-10N=425{,}\\overline{5}-42{,}\\overline{5}', '90N=383', 'N=\\frac{383}{90}'] },
  { latex: '2{,}34\\overline{5}', plain: '2,34 periódico 5', type: 'Periódico mixto', numerator: 2111, denominator: 900, allDigits: '2345', beforePeriod: '234', periodDigits: 1, nonRepeatingDigits: 2, maxSteps: ['N=2{,}34\\overline{5}', '1000N=2345{,}\\overline{5}', '100N=234{,}\\overline{5}', '1000N-100N=2345{,}\\overline{5}-234{,}\\overline{5}', '900N=2111', 'N=\\frac{2111}{900}'] },
  { latex: '3{,}4\\overline{27}', plain: '3,4 periódico 27', type: 'Periódico mixto', numerator: 377, denominator: 110, allDigits: '3427', beforePeriod: '34', periodDigits: 2, nonRepeatingDigits: 1, maxSteps: ['N=3{,}4\\overline{27}', '1000N=3427{,}\\overline{27}', '10N=34{,}\\overline{27}', '1000N-10N=3427{,}\\overline{27}-34{,}\\overline{27}', '990N=3393', 'N=\\frac{3393}{990}=\\frac{377}{110}'] }
];

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function selectExercises() {
  const types = ['Decimal exacto', 'Periódico puro', 'Periódico mixto'];
  const selected = types.flatMap((type) => {
    const candidates = exercisePool.filter((exercise) => exercise.type === type);
    if (type === 'Decimal exacto') return shuffle(candidates).slice(0, 2);

    const oneDigitPeriod = candidates.filter((exercise) => exercise.periodDigits === 1);
    const twoDigitPeriod = candidates.filter((exercise) => exercise.periodDigits === 2);
    const requiredExamples = [shuffle(oneDigitPeriod)[0], shuffle(twoDigitPeriod)[0]];
    const additionalExample = shuffle(candidates.filter((exercise) => !requiredExamples.includes(exercise)))[0];
    return [...requiredExamples, additionalExample];
  });
  return shuffle(selected);
}

let exercises = selectExercises();
const MAX_ERRORS_PER_EXERCISE = 3;
const state = { name: '', index: 0, results: [], errors: 0, activeInput: null, capturePrepared: false };
const $ = (id) => document.getElementById(id);
const welcome = $('welcome-screen');
const exerciseScreen = $('exercise-screen');
const reportScreen = $('report-screen');
const numerator = $('numerator');
const denominator = $('denominator');
let calculatorExpression = '';

function queueMathJax(element) {
  if (window.MathJax?.typesetPromise) {
    return MathJax.typesetPromise([element]).catch((error) => console.error('No se pudo representar la expresión matemática.', error));
  }
  return Promise.resolve();
}

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

function normaliseInteger(value) {
  return value.replace(/[^\d-]/g, '').replace(/(?!^)-/g, '');
}

function normaliseDecimal(value) {
  const clean = value.replace(/[^\d,.-]/g, '').replace(/\./g, ',');
  const firstComma = clean.indexOf(',');
  return firstComma === -1 ? clean : clean.slice(0, firstComma + 1) + clean.slice(firstComma + 1).replaceAll(',', '');
}

function updateInputFromPhysical(input) {
  const kind = input.dataset.inputKind;
  input.value = kind === 'decimal' ? normaliseDecimal(input.value) : normaliseInteger(input.value);
}

function setActiveInput(input) {
  state.activeInput = input;
  $('active-field-label').textContent = `Escribiendo en: ${input.closest('label').firstChild.textContent.trim()}`;
}

function typeWithKey(key) {
  const input = state.activeInput;
  if (!input || input.disabled) return;
  const isDecimal = input.dataset.inputKind === 'decimal';
  if ((key === ',' && !isDecimal) || (key === '-' && input.value.includes('-')) || (key === ',' && input.value.includes(','))) return;
  const text = key === '-' ? '-' : key;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = input.value.slice(0, start) + text + input.value.slice(end);
  input.setSelectionRange(start + text.length, start + text.length);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.focus({ preventScroll: true });
}

function manipulateActiveInput(action) {
  const input = state.activeInput;
  if (!input || input.disabled) return;
  if (action === 'clear') input.value = '';
  if (action === 'backspace') {
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    input.value = input.value.slice(0, start === end ? Math.max(0, start - 1) : start) + input.value.slice(end);
    const position = start === end ? Math.max(0, start - 1) : start;
    input.setSelectionRange(position, position);
  }
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.focus({ preventScroll: true });
}

function proTheoryFor(exercise) {
  if (exercise.type === 'Decimal exacto') {
    return `<h3>Teoría general</h3><p>En un decimal exacto, escribe todas las cifras sin coma en el numerador. En el denominador, escribe un 1 seguido de tantos ceros como cifras haya después de la coma.</p>`;
  }
  if (exercise.type === 'Periódico puro') {
    return `<h3>Teoría general</h3><p>En un periódico puro, forma un número con todas las cifras sin coma y réstale la parte que queda antes del período. En el denominador, escribe tantos nueves como cifras tenga el período. Realiza la resta.</p>`;
  }
  return `<h3>Teoría general</h3><p>En un periódico mixto, forma un número con todas las cifras sin coma y réstale la parte anterior al período. En el denominador, escribe tantos nueves como cifras tenga el período y añade tantos ceros como cifras no periódicas haya. Realiza la resta.</p>`;
}

function proWorkspaceFor(exercise) {
  const subtraction = exercise.type !== 'Decimal exacto';
  return `<h3 id="pro-workspace-title">Construye la fracción inicial</h3>
    <div class="pro-expression">
      <div class="pro-expression-top">
        <label>Todas las cifras sin coma<input id="pro-all-digits" class="math-input" data-input-kind="integer" type="text" inputmode="numeric" autocomplete="off" maxlength="8"></label>
        ${subtraction ? '<span class="pro-expression-sign" aria-hidden="true">−</span><label>Parte antes del período<input id="pro-before-period" class="math-input" data-input-kind="integer" type="text" inputmode="numeric" autocomplete="off" maxlength="8"></label>' : ''}
      </div>
      <span class="pro-expression-line" aria-hidden="true"></span>
      <label class="pro-expression-bottom">Denominador<input id="pro-raw-denominator" class="math-input" data-input-kind="integer" type="text" inputmode="numeric" autocomplete="off" maxlength="8"></label>
    </div>`;
}

function proMaxProcedureFor(exercise) {
  return `<h3>PRO MAX: método algebraico</h3><p>Se plantea una ecuación con el número, se eliminan los decimales y se despeja la fracción.</p>${exercise.maxSteps.map((step) => `<p>\\[${step}\\]</p>`).join('')}`;
}

function setProMaxButtonLabel(showingProcedure) {
  const button = $('pro-max-button');
  if (showingProcedure) {
    button.textContent = 'OCULTAR MÉTODO ALGEBRAICO';
    return;
  }
  button.textContent = 'VER MÉTODO ALGEBRAICO PRO MAX ';
  const badge = document.createElement('span');
  badge.className = 'recommended-badge';
  badge.textContent = 'RECOMENDADO';
  button.append(badge);
}

async function renderExercise() {
  const exercise = exercises[state.index];
  state.errors = 0;
  $('exercise-counter').textContent = `Ejercicio ${state.index + 1} de ${exercises.length}`;
  $('score-preview').textContent = `${state.results.filter((item) => item.correct).length} aciertos`;
  $('progress-value').style.width = `${(state.index / exercises.length) * 100}%`;
  $('decimal-display').innerHTML = `\\[${exercise.latex}\\]`;
  $('decimal-kind').hidden = true;
  $('type-question').hidden = false;
  $('type-feedback').textContent = '';
  $('pro-method-content').hidden = true;
  $('keypad-panel').hidden = true;
  $('procedure').innerHTML = proTheoryFor(exercise);
  $('pro-workspace').innerHTML = proWorkspaceFor(exercise);
  $('pro-max-procedure').hidden = true;
  $('pro-max-procedure').innerHTML = proMaxProcedureFor(exercise);
  $('pro-max-button').hidden = true;
  setProMaxButtonLabel(false);
  $('pro-equation-row').classList.toggle('exact', exercise.type === 'Decimal exacto');
  numerator.value = ''; denominator.value = '';
  const isExact = exercise.type === 'Decimal exacto';
  numerator.disabled = isExact; denominator.disabled = isExact;
  $('subtraction-calculator').hidden = true;
  calculatorExpression = '';
  renderCalculator();
  $('answer-error').hidden = true; $('feedback').textContent = ''; $('feedback').className = 'feedback';
  $('next-button').hidden = true; $('check-button').hidden = true;
  $('attempts-remaining').textContent = `Errores disponibles: ${MAX_ERRORS_PER_EXERCISE} de ${MAX_ERRORS_PER_EXERCISE}`;
  wireMathInputs($('pro-workspace'));
  setActiveInput($('pro-all-digits'));
  await queueMathJax(exerciseScreen);
}

async function selectDecimalType(type) {
  const exercise = exercises[state.index];
  if (type !== exercise.type) {
    if (registerError()) return;
    $('type-feedback').textContent = 'Revisa la parte decimal y vuelve a intentarlo.';
    return;
  }
  $('type-question').hidden = true;
  $('decimal-kind').textContent = `Tipo identificado: ${exercise.type}`;
  $('decimal-kind').hidden = false;
  $('pro-method-content').hidden = false;
  $('keypad-panel').hidden = false;
  $('check-button').hidden = false;
  $('subtraction-calculator').hidden = exercise.type === 'Decimal exacto';
  await queueMathJax($('pro-method-content'));
}

function syncExactResult() {
  const exercise = exercises[state.index];
  if (exercise.type !== 'Decimal exacto') return;
  numerator.value = $('pro-all-digits').value;
  denominator.value = $('pro-raw-denominator').value;
}

function renderCalculator() {
  $('calculator-display').textContent = calculatorExpression ? calculatorExpression.replace('-', ' − ').replace('=', ' = ') : '0';
}

function useCalculator(key, action) {
  if (action === 'clear') {
    calculatorExpression = '';
  } else if (action === 'backspace') {
    calculatorExpression = calculatorExpression.includes('=') ? '' : calculatorExpression.slice(0, -1);
  } else if (key === 'minus') {
    if (calculatorExpression && !calculatorExpression.includes('-') && !calculatorExpression.includes('=')) calculatorExpression += '-';
  } else if (key === 'equals') {
    const [left, right] = calculatorExpression.split('-');
    if (/^\d+$/.test(left) && /^\d+$/.test(right)) calculatorExpression = `${left}-${right}=${Number(left) - Number(right)}`;
  } else if (/^\d$/.test(key)) {
    if (calculatorExpression.includes('=')) calculatorExpression = '';
    if (calculatorExpression.length < 16) calculatorExpression += key;
  }
  renderCalculator();
}

function hasCorrectProTerms(exercise) {
  const rawDenominator = exercise.type === 'Decimal exacto'
    ? `1${'0'.repeat(exercise.decimalDigits)}`
    : `${'9'.repeat(exercise.periodDigits)}${'0'.repeat(exercise.nonRepeatingDigits || 0)}`;
  return $('pro-all-digits').value === exercise.allDigits
    && $('pro-raw-denominator').value === rawDenominator
    && (exercise.type === 'Decimal exacto' || $('pro-before-period').value === exercise.beforePeriod);
}

function updateRemainingErrors() {
  const remaining = MAX_ERRORS_PER_EXERCISE - state.errors;
  $('attempts-remaining').textContent = `Errores disponibles: ${remaining} de ${MAX_ERRORS_PER_EXERCISE}`;
}

function finishExercise({ correct, enteredNumerator, enteredDenominator, message, method = 'PRO' }) {
  const exercise = exercises[state.index];
  state.results.push({
    ...exercise,
    enteredNumerator,
    enteredDenominator,
    method,
    viewedProMax: false,
    errors: state.errors,
    correct
  });
  numerator.disabled = true;
  denominator.disabled = true;
  $('pro-workspace').querySelectorAll('input').forEach((input) => { input.disabled = true; });
  $('check-button').hidden = true;
  $('keypad-panel').hidden = true;
  $('subtraction-calculator').hidden = true;
  const feedback = $('feedback');
  feedback.className = `feedback ${correct ? 'success' : 'failure'}`;
  feedback.textContent = message;
  $('pro-max-button').hidden = !correct;
  $('next-button').textContent = state.index === exercises.length - 1 ? 'VER MI INFORME FINAL' : 'SIGUIENTE EJERCICIO';
  $('next-button').hidden = false;
}

function registerError() {
  state.errors += 1;
  updateRemainingErrors();
  if (state.errors < MAX_ERRORS_PER_EXERCISE) return false;

  const exercise = exercises[state.index];
  $('type-question').hidden = true;
  $('answer-error').hidden = true;
  finishExercise({
    correct: false,
    enteredNumerator: null,
    enteredDenominator: null,
    method: 'No completado',
    message: `Has agotado las tres oportunidades. La fracción generatriz es ${exercise.numerator}/${exercise.denominator}.`
  });
  return true;
}

function submitAnswer() {
  const exercise = exercises[state.index];
  const top = Number.parseInt(numerator.value, 10);
  const bottom = Number.parseInt(denominator.value, 10);
  const error = $('answer-error');
  if (!Number.isInteger(top) || !Number.isInteger(bottom) || bottom === 0) {
    error.textContent = 'Introduce un numerador entero y un denominador entero distinto de cero.';
    error.hidden = false;
    return;
  }
  if (!hasCorrectProTerms(exercise)) {
    if (registerError()) return;
    error.textContent = 'Completa correctamente los tres términos de la fracción inicial antes de comprobar el resultado.';
    error.hidden = false;
    return;
  }
  const enteredGcd = gcd(top, bottom);
  const correct = top / enteredGcd === exercise.numerator && bottom / enteredGcd === exercise.denominator;
  if (!correct) {
    if (registerError()) return;
    $('feedback').className = 'feedback failure';
    $('feedback').textContent = 'Aún no. Revisa la fracción y vuelve a intentarlo.';
    return;
  }
  finishExercise({
    correct: true,
    enteredNumerator: top,
    enteredDenominator: bottom,
    message: '¡Correcto! La fracción es equivalente a la solución.'
  });
}

function addResultRow(result, position) {
  const row = document.createElement('tr');
  const method = result.viewedProMax ? 'PRO + PRO MAX' : result.method;
  const enteredFraction = result.enteredNumerator === null ? '—' : `\\(\\frac{${result.enteredNumerator}}{${result.enteredDenominator}}\\)`;
  row.innerHTML = `<td>${position + 1}</td><td>\\(${result.latex}\\)</td><td>${result.type}</td><td>${method}</td><td>${enteredFraction}</td><td>${result.errors}</td><td class="${result.correct ? 'correct' : 'incorrect'}">${result.correct ? 'Correcta' : 'Incorrecta'}</td>`;
  return row;
}

async function showReport() {
  exerciseScreen.hidden = true; reportScreen.hidden = false;
  const correctCount = state.results.filter((result) => result.correct).length;
  const percentage = Math.round((correctCount / exercises.length) * 100);
  const totalErrors = state.results.reduce((total, result) => total + result.errors, 0);
  const pointsPerExercise = 10 / exercises.length;
  const penaltyPerError = pointsPerExercise / MAX_ERRORS_PER_EXERCISE;
  const penalty = state.results
    .filter((result) => result.correct)
    .reduce((total, result) => total + result.errors * penaltyPerError, 0);
  const score = state.results.reduce((total, result) => {
    if (!result.correct) return total;
    return total + Math.max(0, pointsPerExercise - result.errors * penaltyPerError);
  }, 0);
  $('report-name').textContent = state.name;
  $('report-date').textContent = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', timeStyle: 'short' }).format(new Date());
  $('report-score').textContent = `${score.toLocaleString('es-ES', { maximumFractionDigits: 2 })}/10`;
  $('report-percentage').textContent = `${percentage}%`;
  $('report-completed').textContent = `${state.results.length} de ${exercises.length}`;
  $('report-errors').textContent = `${totalErrors}`;
  $('report-penalty').textContent = `−${penalty.toLocaleString('es-ES', { maximumFractionDigits: 2 })}`;
  const rows = $('report-rows'); rows.replaceChildren(...state.results.map(addResultRow));
  const mastery = $('mastery-cards'); mastery.replaceChildren();
  ['Decimal exacto', 'Periódico puro', 'Periódico mixto'].forEach((type) => {
    const typeResults = state.results.filter((result) => result.type === type);
    const count = typeResults.filter((result) => result.correct).length;
    const card = document.createElement('div');
    card.innerHTML = `<strong>${type}s</strong><span>${count}/${typeResults.length} correctos</span>`;
    mastery.append(card);
  });
  $('final-badge').textContent = percentage >= 80 ? 'Insignia final: PRO MAX' : 'Insignia final: PRO';
  await queueMathJax(reportScreen);
}

async function prepareCapture() {
  state.capturePrepared = true;
  document.body.classList.add('capture-mode');
  $('capture-message').hidden = false;
  $('report-actions').hidden = true;
  $('back-to-report').hidden = false;
  await queueMathJax($('final-report'));
}

function returnToFullReport() {
  document.body.classList.remove('capture-mode');
  $('capture-message').hidden = true;
  $('report-actions').hidden = false;
  $('back-to-report').hidden = true;
}

function restart() {
  exercises = selectExercises();
  state.name = ''; state.index = 0; state.results = []; state.activeInput = null; state.capturePrepared = false;
  document.body.classList.remove('capture-mode');
  reportScreen.hidden = true; welcome.hidden = false; $('student-name').value = ''; $('student-name').focus();
}

$('start-button').addEventListener('click', async () => {
  const name = $('student-name').value.trim();
  if (!name) { $('name-error').hidden = false; $('student-name').focus(); return; }
  state.name = name; $('name-error').hidden = true; welcome.hidden = true; exerciseScreen.hidden = false;
  await renderExercise();
});
$('student-name').addEventListener('input', () => { $('name-error').hidden = true; });
$('pro-max-button').addEventListener('click', async () => {
  const procedure = $('pro-max-procedure');
  procedure.hidden = !procedure.hidden;
  if (!procedure.hidden) {
    state.results[state.results.length - 1].viewedProMax = true;
    setProMaxButtonLabel(true);
    await queueMathJax(procedure);
  } else {
    setProMaxButtonLabel(false);
  }
});
$('type-question').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-decimal-type]');
  if (button) selectDecimalType(button.dataset.decimalType);
});
function wireMathInputs(container) {
  container.querySelectorAll('.math-input').forEach((input) => {
    input.addEventListener('focus', () => setActiveInput(input));
    input.addEventListener('input', () => {
      updateInputFromPhysical(input);
      syncExactResult();
    });
    input.addEventListener('paste', (event) => {
      event.preventDefault();
      const text = event.clipboardData.getData('text');
      input.value = input.dataset.inputKind === 'decimal' ? normaliseDecimal(text) : normaliseInteger(text);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
  });
}

wireMathInputs($('answer-section'));
$('math-keypad').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.key) typeWithKey(button.dataset.key);
  if (button.dataset.action) manipulateActiveInput(button.dataset.action);
});
$('calculator-keys').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) useCalculator(button.dataset.calculatorKey, button.dataset.calculatorAction);
});
$('check-button').addEventListener('click', submitAnswer);
$('next-button').addEventListener('click', async () => {
  if (state.index === exercises.length - 1) { await showReport(); return; }
  state.index += 1; await renderExercise();
});
$('prepare-capture').addEventListener('click', prepareCapture);
$('back-to-report').addEventListener('click', returnToFullReport);
$('restart-button').addEventListener('click', restart);
