import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { TopNavigation } from '../../../../shared/components/top-navigation/top-navigation';
import { StatsCards } from '../../components/stats-cards/stats-cards';
import { SearchToolbar } from '../../components/search-toolbar/search-toolbar';
import { PaymentTable, Player } from '../../components/payment-table/payment-table';

@Component({
  selector: 'app-payment-dashboard-page',
  imports: [CommonModule, NgIconComponent, TopNavigation, StatsCards, SearchToolbar, PaymentTable],
  templateUrl: './payment-dashboard-page.html',
  styleUrl: './payment-dashboard-page.scss',
})
export class PaymentDashboardPage {
  stats = {
    totalPlayers: 124,
    confirmedRevenue: 4500000,
    confirmedCount: 90,
    pendingRevenue: 1700000,
    pendingCount: 34
  };

  players: Player[] = [
    {
      id: '1',
      name: 'Sarah Jenkins',
      registrationId: '1024',
      category: 'Femenino',
      phone: '+57 (300) 123-4567',
      paymentMethod: 'Efectivo',
      isPaid: false,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVvCGnHtM5fCWWM1cy3XtE0oBOEN2tFkBjclaWiaIVviSUGdMVH1hGhHQuZUjoWtsOjvnPQ9YhZanR8ciENiqqmg_OA_EyZvqVpVtrrBs_-f23GXD_1_93_0qM3B8TQo7YrKM2gECldqX6Er4NDUnCAoL8RIJOv_5xjW1EcWfjd9moTOKoBt-ajjA06EqvyOF2KaxKxshx_ZU4foH0K4NpETI6MxTzH5Mn8P1rktNRVuA0gs89A_kGiior3JV8wixd6Uh550eaiJc'
    },
    {
      id: '2',
      name: 'Michael Chen',
      registrationId: '1025',
      category: '3ra Categoría',
      phone: '+57 (300) 987-6543',
      paymentMethod: 'Nequi',
      isPaid: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJtmdAC2y-2XvBRxTAllTuhsH2Yo6yHqGKPVXUdO2P1v5NkMi7q4rKoJg-iyiUpG_MBALkt10xuVj8vo_SFaOrteOpNQF6gBCzcXQshPOft-esYwnUwl_Wc31oXJymvEBJwJTKYG4cI736TFFzKI2vkhQWsABM25PotXicGgg9RR9b3A0U9iNOTe2ZfMzazqqMdqKxZr5MazBzhhT4eThU24MydUbowrms8Prs89BrY-6PWA9HnQ8WKPKXl9za6VhnH1B0wI9HB_4'
    },
    {
      id: '3',
      name: 'Emma Wilson',
      registrationId: '1026',
      category: '4ta Categoría',
      phone: '+57 (300) 456-7890',
      paymentMethod: 'Tarjeta',
      isPaid: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3aY7uUlcVWxwcdYmSR7ztS-rnBFdaI2I5s5sNvWbtXKGAAA3PjAhU_p5pr2tWDyqSZ67V8pbCknKdDWtIw1fgf2QbjMPv2xNrRlzcTygy0sVpcFxl6ULTjXP_GL91cCjA4c9KpYIZvn7xYswGhMmlFXI8WfqdV_FxGxxJxWlTbpatDnLTpnpE8GQDhyPcaSRc4vNHPzaW-IS2LZRwHK3R6ygr-ol6IoNgAvq4bAoVbDOWYMk2dFWv9OhLlpTM5C6FeABl-fRrIbs'
    },
    {
      id: '4',
      name: 'James Rodrick',
      registrationId: '1027',
      category: '3ra Categoría',
      phone: '+57 (300) 777-8888',
      paymentMethod: 'Nequi',
      isPaid: false
    }
  ];

  onSearch(query: string) {
    console.log('Búsqueda:', query);
  }

  onCategoryChange(category: string) {
    console.log('Categoría cambiada:', category);
  }

  onStatusChange(status: string) {
    console.log('Estado cambiado:', status);
  }

  onExport() {
    console.log('Exportando CSV...');
    alert('Exportando datos a CSV...');
  }

  onPaymentToggle(event: { playerId: string, isPaid: boolean }) {
    console.log(`Pago actualizado para jugador ${event.playerId}: ${event.isPaid ? 'Confirmado' : 'Pendiente'}`);
  }
}
