import * as React from "react";
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";


export function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons  size={30} style={{ marginBottom: -3 }} {...props} />;
}
export function TabBarFontIcon(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
    return <FontAwesome5  size={30} style={{ marginBottom: -3 }} {...props} />;
}
export function TabBarMaterialCommunityIcons(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
    return <MaterialCommunityIcons  size={30} style={{ marginBottom: -3 }} {...props} />;
}
export function TabBarAwesomeIcons(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return <FontAwesome  size={30} style={{ marginBottom: -3,width:100 }} {...props} />;
}
