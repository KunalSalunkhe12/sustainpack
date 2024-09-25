"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Box,
  DollarSign,
  HelpCircle,
  Leaf,
  Package,
  Recycle,
  Send,
  Truck,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

export default function Component() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    packageSize: "",
    packageWeight: "",
    destination: "",
    shippingFrequency: "",
    productType: "",
    fragility: "",
    handlingNeeds: "",
    preferredMaterials: [],
    budget: 50,
    desiredCertifications: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value) => {
    setFormData((prev) => ({ ...prev, budget: value[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const renderInputForm = () => (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="packageSize" className="text-gray-300">
            Package Size
          </Label>
          <Input
            id="packageSize"
            name="packageSize"
            placeholder="Enter package dimensions"
            value={formData.packageSize}
            onChange={handleInputChange}
            className="bg-[#2a3142] border-none text-white placeholder-gray-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="packageWeight" className="text-gray-300">
            Package Weight
          </Label>
          <Input
            id="packageWeight"
            name="packageWeight"
            placeholder="Enter package weight"
            value={formData.packageWeight}
            onChange={handleInputChange}
            className="bg-[#2a3142] border-none text-white placeholder-gray-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination" className="text-gray-300">
            Destination
          </Label>
          <Input
            id="destination"
            name="destination"
            placeholder="Enter shipping destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="bg-[#2a3142] border-none text-white placeholder-gray-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="shippingFrequency" className="text-gray-300">
            Shipping Frequency
          </Label>
          <Select
            name="shippingFrequency"
            onValueChange={(value) =>
              handleInputChange({
                target: { name: "shippingFrequency", value },
              })
            }
          >
            <SelectTrigger
              id="shippingFrequency"
              className="bg-[#2a3142] border-none text-white"
            >
              <SelectValue placeholder="Select shipping frequency" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a3142] border-none">
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="productType" className="text-gray-300">
            Product Type
          </Label>
          <Input
            id="productType"
            name="productType"
            placeholder="Enter product type"
            value={formData.productType}
            onChange={handleInputChange}
            className="bg-[#2a3142] border-none text-white placeholder-gray-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fragility" className="text-gray-300">
            Product Fragility
          </Label>
          <RadioGroup
            name="fragility"
            onValueChange={(value) =>
              handleInputChange({ target: { name: "fragility", value } })
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="fragility-low" />
              <Label htmlFor="fragility-low" className="text-gray-300">
                Low
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="fragility-medium" />
              <Label htmlFor="fragility-medium" className="text-gray-300">
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="fragility-high" />
              <Label htmlFor="fragility-high" className="text-gray-300">
                High
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="handlingNeeds" className="text-gray-300">
          Special Handling Needs
        </Label>
        <Input
          id="handlingNeeds"
          name="handlingNeeds"
          placeholder="Enter special handling requirements"
          value={formData.handlingNeeds}
          onChange={handleInputChange}
          className="bg-[#2a3142] border-none text-white placeholder-gray-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="preferredMaterials" className="text-gray-300">
          Preferred Materials
        </Label>
        <Select
          name="preferredMaterials"
          onValueChange={(value) =>
            handleInputChange({
              target: {
                name: "preferredMaterials",
                value: [...formData.preferredMaterials, value],
              },
            })
          }
        >
          <SelectTrigger
            id="preferredMaterials"
            className="bg-[#2a3142] border-none text-white"
          >
            <SelectValue placeholder="Select preferred materials" />
          </SelectTrigger>
          <SelectContent className="bg-[#2a3142] border-none">
            <SelectItem className="text-white" value="recycled-cardboard">
              Recycled Cardboard
            </SelectItem>
            <SelectItem className="text-white" value="biodegradable-peanuts">
              Biodegradable Peanuts
            </SelectItem>
            <SelectItem className="text-white" value="paper-tape">
              Paper Tape
            </SelectItem>
            <SelectItem className="text-white" value="compostable-mailers">
              Compostable Mailers
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="budget" className="text-gray-300">
          Budget Constraints
        </Label>
        <div className="flex items-center space-x-4">
          <Slider
            id="budget"
            max={100}
            step={1}
            value={[formData.budget]}
            onValueChange={handleSliderChange}
            className="flex-grow"
          />
          <span className="text-sm font-medium text-white">
            Budget: ${formData.budget}
          </span>
        </div>
      </div>
      <Button
        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
        type="submit"
      >
        Get Recommendations
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  );

  const renderResults = () => {
    const packagingOptions = [
      {
        name: "Eco-Friendly Box",
        description: "Recycled cardboard packaging",
        cost: 3.5,
        carbonFootprint: 2.1,
        recyclability: 95,
        biodegradability: 80,
        color: "#8884d8",
      },
      {
        name: "Green Mailer",
        description: "Compostable packaging solution",
        cost: 2.75,
        carbonFootprint: 1.8,
        recyclability: 100,
        biodegradability: 100,
        color: "#82ca9d",
      },
      {
        name: "Biodegradable Bubble Wrap",
        description: "Eco-friendly protective packaging",
        cost: 4.2,
        carbonFootprint: 2.5,
        recyclability: 80,
        biodegradability: 90,
        color: "#ffc658",
      },
    ];

    const costData = packagingOptions
      .map((option) => ({
        name: option.name,
        cost: option.cost,
      }))
      .sort((a, b) => b.cost - a.cost);

    const carbonFootprintData = packagingOptions.map((option) => ({
      name: option.name,
      carbonFootprint: option.carbonFootprint,
    }));

    const recyclabilityBiodegradabilityData = packagingOptions.map((option) => [
      { name: "Recyclability", value: option.recyclability, color: "#8884d8" },
      {
        name: "Non-recyclable",
        value: 100 - option.recyclability,
        color: "#82ca9d",
      },
      {
        name: "Biodegradability",
        value: option.biodegradability,
        color: "#ffc658",
      },
      {
        name: "Non-biodegradable",
        value: 100 - option.biodegradability,
        color: "#ff8042",
      },
    ]);

    const getRadarChartData = (option) => [
      { subject: "Cost", A: (1 - option.cost / 5) * 100, fullMark: 100 },
      {
        subject: "Carbon Footprint",
        A: (1 - option.carbonFootprint / 3) * 100,
        fullMark: 100,
      },
      { subject: "Recyclability", A: option.recyclability, fullMark: 100 },
      {
        subject: "Biodegradability",
        A: option.biodegradability,
        fullMark: 100,
      },
    ];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-white">
            Packaging Recommendations
          </h3>
          <Button
            onClick={() => setShowResults(false)}
            variant="outline"
            className="bg-[#2a3142] border-none text-white hover:bg-[#3a4152]"
          >
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to Input
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {packagingOptions.map((option, index) => (
            <Card key={index} className="bg-[#2a3142] border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-white">
                  {option.name}
                  <Recycle className="ml-2 h-4 w-4 text-green-500" />
                </CardTitle>
                <p className="text-sm text-gray-400">{option.description}</p>
              </CardHeader>
              <CardContent>
                <p className="flex items-center text-sm text-gray-300">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Cost: ${option.cost.toFixed(2)} per unit
                </p>
                <p className="flex items-center mt-2 text-sm text-gray-300">
                  <Leaf className="mr-2 h-4 w-4" />
                  Carbon Footprint: {option.carbonFootprint} kg CO2e
                </p>
                <p className="flex items-center mt-2 text-sm text-gray-300">
                  <Recycle className="mr-2 h-4 w-4" />
                  Recyclability: {option.recyclability}%
                </p>
                <p className="flex items-center mt-2 text-sm text-gray-300">
                  <Leaf className="mr-2 h-4 w-4" />
                  Biodegradability: {option.biodegradability}%
                </p>
                <div className="mt-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      data={getRadarChartData(option)}
                    >
                      <PolarGrid stroke="#4a5568" />
                      <PolarAngleAxis dataKey="subject" stroke="#a0aec0" />
                      <Radar
                        name={option.name}
                        dataKey="A"
                        stroke={option.color}
                        fill={option.color}
                        fillOpacity={0.6}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-[#2a3142] border-none">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Package className="mr-2 h-5 w-5" />
              Packaging Options Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cost" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1e2435]">
                <TabsTrigger
                  value="cost"
                  className="data-[state=active]:bg-[#3a4152]"
                >
                  Cost
                </TabsTrigger>
                <TabsTrigger
                  value="carbon"
                  className="data-[state=active]:bg-[#3a4152]"
                >
                  Carbon Footprint
                </TabsTrigger>
                <TabsTrigger
                  value="recyclability"
                  className="data-[state=active]:bg-[#3a4152]"
                >
                  Recyclability
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cost">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart layout="vertical" data={costData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis type="number" stroke="#a0aec0" />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={100}
                      stroke="#a0aec0"
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#2a3142",
                        border: "none",
                      }}
                    />
                    <Bar dataKey="cost" fill="#8884d8" name="Cost ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="carbon">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={carbonFootprintData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis dataKey="name" stroke="#a0aec0" />
                    <YAxis stroke="#a0aec0" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#2a3142",
                        border: "none",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="carbonFootprint"
                      fill="#82ca9d"
                      name="Carbon Footprint (kg CO2e)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="recyclability">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {packagingOptions.map((option, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <h5 className="text-sm font-semibold mb-2 text-white">
                        {option.name}
                      </h5>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={recyclabilityBiodegradabilityData[index]}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                          >
                            {recyclabilityBiodegradabilityData[index].map(
                              (entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={entry.color}
                                />
                              )
                            )}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#2a3142",
                              border: "none",
                            }}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="bg-[#2a3142] border-none">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Leaf className="mr-2 h-5 w-5" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-300">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start"
              >
                <Box className="mr-2 h-5 w-5 text-purple-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Optimize Package Size:</p>
                  <p className="text-sm">
                    Reducing your average package size by 10% could lead to a
                    15% decrease in material usage and a 12% reduction in
                    shipping costs.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start"
              >
                <Recycle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Increase Recyclability:</p>
                  <p className="text-sm">
                    Switching to the Green Mailer for smaller items can boost
                    your overall packaging recyclability from 85% to 92%,
                    significantly reducing landfill waste.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start"
              >
                <Truck className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Optimize Shipping Frequency:</p>
                  <p className="text-sm">
                    Consolidating your shipments from daily to twice-weekly
                    could reduce your carbon footprint by up to 30% and cut
                    transportation costs by 25%.
                  </p>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start"
              >
                <DollarSign className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Cost-Effective Eco-Solutions:</p>
                  <p className="text-sm">
                    Implementing a mix of Eco-Friendly Boxes (60%) and Green
                    Mailers (40%) can reduce your packaging costs by 18% while
                    maintaining a high sustainability score.
                  </p>
                </div>
              </motion.li>
            </ul>
          </CardContent>
        </Card>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
          Download Comprehensive Report
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white p-4">
      <Card className="w-full max-w-4xl mx-auto bg-[#1e2435] border-none shadow-lg">
        <CardHeader className="border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-yellow-500" />
            <CardTitle className="text-2xl font-bold text-white">
              SustainPack Advisor
            </CardTitle>
          </div>
          <p className="text-gray-400">
            Your One-Stop Solution for Sustainable Packaging Decisions
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <AnimatePresence mode="wait">
            {showResults ? renderResults() : renderInputForm()}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
