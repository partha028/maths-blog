const postsData = [
  {
    id: 1,
    title: 'Pythagoras Theorem',
    category: 'Geometry',
    content: 'In a right triangle: a² + b² = c².',
    example: 'If a=6 and b=8, then c=√(6²+8²)=√(36+64)=√100=10.'
  },
  {
    id: 2,
    title: 'Quadratic Equation',
    category: 'Algebra',
    content: 'Standard form: ax² + bx + c = 0.',
    formula: 'x = (-b ± √(b² - 4ac)) / 2a',
    example: 'Solve 2x² - 4x - 6 = 0 → x = (4 ± √(16 + 48))/4 = (4 ± √64)/4 = (4 ± 8)/4 → x = 3, -1.'
  },
  {
    id: 3,
    title: 'Sine Rule',
    category: 'Trigonometry',
    content: 'a/sinA = b/sinB = c/sinC',
    example: 'Given a=10, angle A=30°, angle B=45°, find b: b = (10 * sin45°)/sin30° ≈ (10 * 0.7071)/0.5 ≈ 14.14.'
  },
  {
    id: 4,
    title: 'Cosine Rule',
    category: 'Trigonometry',
    content: 'c² = a² + b² - 2ab cosC',
    example: 'If a=7, b=9, angle C=60°, then c² = 49 + 81 - 2*7*9*cos60° = 130 - 63 = 67 → c ≈ √67 ≈ 8.19.'
  },
  {
    id: 5,
    title: 'Area of Circle',
    category: 'Geometry',
    content: 'Area = πr²',
    example: 'If r=10, area = π*10² = 100π ≈ 314.16.'
  },
  {
    id: 6,
    title: 'Volume of Cube',
    category: 'Geometry',
    content: 'Volume = a³',
    example: 'If side a=5, volume = 5³ = 125 cubic units.'
  },
  {
    id: 7,
    title: 'Factorization',
    category: 'Algebra',
    content: 'x² + (a+b)x + ab = (x + a)(x + b)',
    example: 'Factor x² + 7x + 12 → (x+3)(x+4).'
  },
  {
    id: 8,
    title: 'Arithmetic Series',
    category: 'Algebra',
    content: 'Sₙ = n/2 * (2a + (n-1)d)',
    example: 'Find sum of first 20 terms of 3,6,9,... → a=3, d=3, n=20 → Sₙ = 20/2 * (2*3 + 19*3) = 10*(6+57)=630.'
  },
  {
    id: 9,
    title: 'Integration Basics',
    category: 'Calculus',
    content: '∫xⁿ dx = xⁿ⁺¹ / (n+1) + C',
    example: '∫x³ dx = x⁴/4 + C.'
  },
  {
    id: 10,
    title: 'Differentiation Basics',
    category: 'Calculus',
    content: 'd/dx xⁿ = n*xⁿ⁻¹',
    example: 'd/dx x⁴ = 4x³.'
  },
  {
    id: 11,
    title: 'Logarithmic Identity',
    category: 'Algebra',
    content: 'log(ab) = log(a) + log(b)',
    example: 'log(20) = log(4*5) = log(4) + log(5).'
  },
  {
    id: 12,
    title: 'Binomial Expansion',
    category: 'Algebra',
    content: '(a + b)ⁿ = Σ[nCk * aⁿ⁻ᵏ * bᵏ]',
    example: '(x + 2)³ = x³ + 3x²*2 + 3x*4 + 8 = x³ + 6x² + 12x + 8.'
  },
  {
    id: 13,
    title: 'Distance Formula',
    category: 'Geometry',
    content: 'Distance = √[(x₂ - x₁)² + (y₂ - y₁)²]',
    example: 'Between (2,3) and (7,11) → √[(5)² + (8)²] = √(25+64) = √89 ≈ 9.43.'
  },
  {
    id: 14,
    title: 'Slope of a Line',
    category: 'Algebra',
    content: 'Slope m = (y₂ - y₁)/(x₂ - x₁)',
    example: 'Points (1,2) and (4,10) → m = (10-2)/(4-1) = 8/3.'
  },
  {
    id: 15,
    title: 'Circle Equation',
    category: 'Geometry',
    content: '(x - h)² + (y - k)² = r²',
    example: 'Center (3,4), radius 5 → (x-3)² + (y-4)² = 25.'
  },
  {
    id: 16,
    title: 'Permutation Formula',
    category: 'Algebra',
    content: 'nPr = n! / (n - r)!',
    example: '5P3 = 5! / 2! = 120 / 2 = 60.'
  },
  {
    id: 17,
    title: 'Combination Formula',
    category: 'Algebra',
    content: 'nCr = n! / [r!(n - r)!]',
    example: '6C2 = 6! / (2!*4!) = 720 / (2*24) = 15.'
  },
  {
    id: 18,
    title: 'Exponential Growth',
    category: 'Algebra',
    content: 'y = a * e^(kt)',
    example: 'If a=100, k=0.02, t=10 → y = 100 * e^(0.2) ≈ 122.14.'
  },
  {
    id: 19,
    title: 'Derivative of sin(x)',
    category: 'Calculus',
    content: 'd/dx sin(x) = cos(x)',
    example: 'd/dx sin(π/3) = cos(π/3) = 0.5.'
  },
  {
    id: 20,
    title: 'Definite Integral',
    category: 'Calculus',
    content: '∫ₐᵇ f(x) dx = F(b) - F(a)',
    example: '∫₀² x² dx = [x³/3]₀² = (8/3 - 0) = 8/3.'
  },
  {
    id: 21,
    title: 'Matrix Addition',
    category: 'Algebra',
    content: 'Add corresponding elements',
    example: '[1 2; 3 4] + [5 6; 7 8] = [6 8; 10 12].'
  },
  {
    id: 22,
    title: 'Matrix Multiplication',
    category: 'Algebra',
    content: 'Multiply rows by columns',
    example: '[1 2; 3 4] × [2 0; 1 2] = [4 4; 10 8].'
  },
  {
    id: 23,
    title: 'Probability Basics',
    category: 'Statistics',
    content: 'P(E) = favorable outcomes / total outcomes',
    example: 'Rolling a die, P(4) = 1/6.'
  },
  {
    id: 24,
    title: 'Mean of Data',
    category: 'Statistics',
    content: 'Mean = sum of values / number of values',
    example: 'Mean of [2,4,6,8] = (2+4+6+8)/4 = 5.'
  },
  {
    id: 25,
    title: 'Median of Data',
    category: 'Statistics',
    content: 'Middle value when sorted',
    example: 'Median of [3,1,4,2,5] = 3.'
  },
  {
    id: 26,
    title: 'Mode of Data',
    category: 'Statistics',
    content: 'Most frequent value',
    example: 'Mode of [1,2,2,3,5] = 2.'
  }]

export default postsData;
