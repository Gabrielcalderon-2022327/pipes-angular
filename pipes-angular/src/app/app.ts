import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  PerimetroRectanguloPipe,
  AreaTrianguloPipe,
  VelocidadFinalPipe,
  LeyOhmPipe,
  DensidadPipe,
  FahrenheitACelsiusPipe,
  ImcPipe,
  ProgresionAritmeticaPipe,
  SumaAngulosPoligonoPipe,
  KmAMillasPipe
} from './pipes/formulas.pipe';

interface CardFormula {
  id: number;
  titulo: string;
  categoria: 'Física' | 'Matemáticas' | 'Salud' | 'Conversión';
  expresion: string;
  descripcion: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PerimetroRectanguloPipe,
    AreaTrianguloPipe,
    VelocidadFinalPipe,
    LeyOhmPipe,
    DensidadPipe,
    FahrenheitACelsiusPipe,
    ImcPipe,
    ProgresionAritmeticaPipe,
    SumaAngulosPoligonoPipe,
    KmAMillasPipe
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Variables principales de la aplicación
  valPrincipal: number = 10;
  paramSecundario: number = 5;
  paramTerciario: number = 2;

  formulas: CardFormula[] = [
    { id: 1, titulo: 'Perímetro Rectángulo', categoria: 'Matemáticas', expresion: 'P = 2(b + h)', descripcion: 'Calcula el perímetro sumando base y altura.' },
    { id: 2, titulo: 'Área Triángulo', categoria: 'Matemáticas', expresion: 'A = (b × h) / 2', descripcion: 'Espacio bidimensional de un triángulo.' },
    { id: 3, titulo: 'Velocidad Final (MRUV)', categoria: 'Física', expresion: 'v = v₀ + at', descripcion: 'Calcula la velocidad alcanzada con aceleración.' },
    { id: 4, titulo: 'Ley de Ohm (Voltaje)', categoria: 'Física', expresion: 'V = I × R', descripcion: 'Voltaje en función de corriente y resistencia.' },
    { id: 5, titulo: 'Densidad', categoria: 'Física', expresion: 'ρ = m / v', descripcion: 'Relación entre masa y volumen.' },
    { id: 6, titulo: 'Fahrenheit a Celsius', categoria: 'Conversión', expresion: '°C = (°F - 32) × 5/9', descripcion: 'Conversión de escalas de temperatura.' },
    { id: 7, titulo: 'Índice Masa Corporal (IMC)', categoria: 'Salud', expresion: 'IMC = Peso / Altura²', descripcion: 'Indicador nutricional de peso y estatura.' },
    { id: 8, titulo: 'Progresión Aritmética', categoria: 'Matemáticas', expresion: 'aₙ = a₁ + (n - 1)d', descripcion: 'Encuentra el valor del término "n".' },
    { id: 9, titulo: 'Ángulos de un Polígono', categoria: 'Matemáticas', expresion: 'S = (n - 2) × 180°', descripcion: 'Suma de ángulos internos dado el # de lados.' },
    { id: 10, titulo: 'Kilómetros a Millas', categoria: 'Conversión', expresion: 'mi = km × 0.621371', descripcion: 'Convierte distancias métricas a imperiales.' }
  ];
}