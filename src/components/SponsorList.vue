<script setup lang="ts">
// import axios from 'axios'

// export default {
//     name: 'Sponsors',
//     data () {
//         return{
//             sponsors: [],
//             errors: [],
//         }
//     },
//     created () {
//         axios.get('https://club.metsenat.uz/api/v1/sponsor-list/?format=json')
//         .then(response => {
//             this.sponsors = response.data
//             console.log(response)
//         })
//         .catch(e => {
//             this.errors.push(e)
//         })
//     }
// }

const sponsors = [
  {
    id: 594,
    full_name: "name",
    phone: "+998 (99) 123 45 67",
    sum: 7500000,
    payment_type: [
      {
        id: 45,
        title: "Plastik karta",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-10-15T15:05:28.497606+05:00",
    get_status_display: "Yangi",
  },
  {
    id: 592,
    full_name: "Movlonov Abduqodir Abdubori o’g’li",
    phone: "+998 (90) 941 18 78",
    sum: 3000000,
    payment_type: [
      {
        id: 44,
        title: "Naqd pul",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-09-25T09:43:01.365364+05:00",
    get_status_display: "Tasdiqlangan",
  },
  {
    id: 590,
    full_name: "Rahmonov Otabek Farhodjon o'g'li",
    phone: "+998 (99) 862 41 22",
    sum: 0,
    payment_type: [
      {
        id: 46,
        title: "Pul ko‘chirish",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-09-08T23:49:54.236924+05:00",
    get_status_display: "Bekor qilingan",
  },
  {
    id: 589,
    full_name: "Iroda Abduraxmonova Yashin qizi",
    phone: "+998 (99) 204 14 31",
    sum: 5000000,
    payment_type: [
      {
        id: 46,
        title: "Pul ko‘chirish",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-09-05T11:18:58.264395+05:00",
    get_status_display: "Moderatsiyada",
  },
  {
    id: 588,
    full_name: "Narziyeva Zuxro Amrullayevna",
    phone: "+998 (91) 241 02 20",
    sum: 13000000,
    payment_type: [
      {
        id: 46,
        title: "Pul ko‘chirish",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-09-01T21:39:10.549895+05:00",
    get_status_display: "Yangi",
  },
  {
    id: 587,
    full_name: "Abdurasulova Sevara Eshmuhammedovna",
    phone: "+998 (94) 475 89 27",
    sum: 7500000,
    payment_type: [
      {
        id: 46,
        title: "Pul ko‘chirish",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-09-01T18:08:42.635190+05:00",
    get_status_display: "Yangi",
  },
  {
    id: 586,
    full_name: "Falonchiyev Pistonchi",
    phone: "+99890 000-12-36",
    sum: 50000000,
    payment_type: [
      {
        id: 44,
        title: "Naqd pul",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-08-15T17:46:55.760537+05:00",
    get_status_display: "Moderatsiyada",
  },
  {
    id: 585,
    full_name: "Yuldoshev Mirjalol Komil o'g'li",
    phone: "+998 (99) 581 21 21",
    sum: 50000000,
    payment_type: [
      {
        id: 45,
        title: "Plastik karta",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-08-14T07:42:54.497846+05:00",
    get_status_display: "Moderatsiyada",
  },
  {
    id: 584,
    full_name: "name",
    phone: "+998 (89) 854 44 55",
    sum: 500000,
    payment_type: [
      {
        id: 46,
        title: "Pul ko‘chirish",
      },
    ],
    firm: "",
    spent: 0,
    created_at: "2022-08-12T23:27:02.131408+05:00",
    get_status_display: "Moderatsiyada",
  },
  {
    id: 583,
    full_name: "jasfalskfkj update",
    phone: "+998 (DA) FAD FD AF",
    sum: 10000001,
    payment_type: [
      {
        id: 46,
        title: "Pul ko‘chirish",
      },
    ],
    firm: "sadlkjfgads;lkldgk",
    spent: 0,
    created_at: "2022-08-09T18:49:01.490579+05:00",
    get_status_display: "Moderatsiyada",
  },
];
</script>

<template>
  <div class="bg-grayy-200 py-12">
    <div class="container mx-auto px-5">
      <table class="w-full">
        <thead>
          <tr class="text-sm font-medium text-gray-400 uppercase">
            <td class="py-4 px-4">#</td>
            <td class="py-4">f.i.sh.</td>
            <td class="py-4 text-center">Tel.Raqami</td>
            <td class="py-4 text-center">Homiylik summasi</td>
            <td class="py-4 text-center">Sarflangan summa</td>
            <td class="py-4 text-center">Sana</td>
            <td class="py-4 text-center">Holati</td>
            <td class="py-4 text-center">Amallar</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="sponsor in sponsors"
            :key="sponsor.id"
            class="text-sm text-gray-500"
          >
            <td class="py-4 px-4 text-dark bg-white border-b">
              <span> {{ sponsor.id }} </span>
            </td>
            <td class="py-4 text-dark font-medium bg-white border-b">
              {{ sponsor.full_name }}
            </td>
            <td
              class="py-4 tabular-nums text-center text-dark bg-white border-b"
            >
              {{ sponsor.phone }}
            </td>
            <td
              class="py-4 tabular-nums text-center font-medium text-dark bg-white border-b"
            >
              {{ sponsor.sum }} <span class="text-gray-400">UZS</span>
            </td>
            <td
              class="py-4 tabular-nums text-center font-medium text-dark bg-white border-b"
            >
              {{ sponsor.spent }} <span class="text-gray-400">UZS</span>
            </td>
            <td
              class="py-4 tabular-nums text-center text-dark bg-white border-b"
            >
              {{ sponsor.created_at }}
            </td>
            <td class="py-4 text-center bg-white border-b">
              <span
                class="font-medium capitalize"
                :class="{
                  'text-status-blue': sponsor.get_status_display === 'Yangi',
                  'text-status-orange':
                    sponsor.get_status_display === 'Moderatsiyada',
                  'text-status-yellow':
                    sponsor.get_status_display === 'Tasdiqlangan',
                  'text-status-gray':
                    sponsor.get_status_display === 'Bekor qilingan',
                }"
              >
                {{ sponsor.get_status_display }}
              </span>
            </td>
            <td
              class="py-4 tabular-nums text-center text-dark bg-white border-b"
            >
              <img class="inline-block" src="/img/icons/eye.svg" alt="eye" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
