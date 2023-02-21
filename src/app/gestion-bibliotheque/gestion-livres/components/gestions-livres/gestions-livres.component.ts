import { ChartData, ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestions-livres',
  templateUrl: './gestions-livres.component.html',
  styleUrls: ['./gestions-livres.component.css']
})
export class GestionsLivresComponent implements OnInit {

  emptuntParCategorieData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Romantique', data: [1000, 1200, 1050, 200, 500] },
      { label: 'Informatique', data: [200, 100, 400, 50, 90] },
      { label: 'Amour', data: [500, 400, 350, 450, 650] },
      { label: 'Drame', data: [1200, 1500, 1020, 1600, 900] },
    ],
  };

  empruntParCategorieOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Emprunts des cinq derniers mois',
      },
    },
  };


  livreEmpruntsVsDispoData: ChartData<'doughnut'> = {
    labels: [
      'Emprunté',
      'Disponible'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [44, 68],
      hoverOffset: 4
    }]

  };

  isListeLivre:Boolean = true;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onCheckListTable(){
    this.isListeLivre = !this.isListeLivre;
  }
}
