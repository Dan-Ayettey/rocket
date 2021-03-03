import * as React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";


export function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons  size={30} style={{ marginBottom: -3 }} {...props} />;
}
export function TabBarFontIcon(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
    return <FontAwesome5  size={30} style={{ marginBottom: -3 }} {...props} />;
}
