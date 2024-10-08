import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { Graph } from '@/components/graphs'

export default function Overview() {
  return (
    <LinearGradient
      colors={['#DAD5FB', '#FFF']}
      start={[0, 0]}
      end={[0, 0.5]}
      className="flex-1 px-[15] pb-[15]"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-left gap-2 mb-6">
          <Text className="font-mediumj text-4xl mt-16">Overview</Text>
          <Text className="font-regular text-base text-gray-200 ml-1">
            Nesse ano <AntDesign name="caretdown" size={12} color="gray" />{' '}
          </Text>
        </View>

        <View className="flex-row flex-wrap gap-5 ">
          <Graph.BasicGraph
            title="Cliques"
            percentage="+10%"
            quantity={88.438}
            valueLastYear={86.4}
          />
          <Graph.BasicGraph
            title="Aberturas"
            percentage="+12%"
            quantity={120.921}
            valueLastYear={107.5}
          />
          <Graph.BasicGraph
            title="Envios"
            percentage="-5%"
            quantity={201.769}
            valueLastYear={212.34}
          />
          <Graph.BasicGraph
            title="Leads"
            percentage="+3.5%"
            quantity={17.39}
            valueLastYear={16.8}
          />
        </View>

        <View className="align-center mt-6 gap-2 mb-6">
          <Graph.SalesFigures />

          <Graph.HitRate />

          <Graph.AllVisitor />
        </View>

        <View className="align-center mt gap-6">
          <Graph.SalesReport />

          <Graph.PlatformVisitor />

          <Graph.TopSalesLocations />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
