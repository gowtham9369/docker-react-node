import { useState, useEffect } from "react";
import { fetchVehicles } from "../services/api";
import { Vehicle } from "../types/vehicle";
import { Container, Paper, Box, Stack } from "@mui/material";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Error from "../components/ErrorComponent";
import TableComponent from "../components/TableComponent";
import MapComponent from "../components/MapComponent";
import SkeletonLoader from "../components/SkeletonLoader";

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openError, setOpenError] = useState(false); // To control the Snackbar visibility

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await fetchVehicles();
        setVehicles(data);
        setFilteredVehicles(data.slice(0, ITEMS_PER_PAGE));
      } catch (err) {
        console.error("Error fetching vehicles:", err);
        setError("Failed to fetch vehicles.");
        setOpenError(true); // Show the error notification
      } finally {
        setLoading(false);
      }
    };

    loadVehicles();
  }, []);

  const handlePageChange = (selectedPage: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(selectedPage);
      const start = (selectedPage - 1) * ITEMS_PER_PAGE;
      setFilteredVehicles(vehicles.slice(start, start + ITEMS_PER_PAGE));
      setSelectedVehicle(null); // Clear selection when the page changes
      setLoading(false);
    }, 1000);
  };

  // Function to handle vehicle selection from either Map or Table
  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle); // Use setSelectedVehicle to update the state
  };

  const handleCloseError = () => {
    setOpenError(false);
  };

  if (error) return <Error message={error} open={openError} onClose={handleCloseError} />;

  return (
    <div>
      <Header />
      <Container
        maxWidth={false}
        sx={{
          marginBottom: 2,
          borderBottom: 1,
          border: "1px solid #ccc",
          backgroundColor: "white",
          boxShadow: 0,
        }}
      >
        {loading ? (
          <SkeletonLoader />
        ) : (
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              <Box flex={1}>
                <MapComponent
                  vehicles={filteredVehicles}
                  onSelect={handleSelectVehicle}
                  selected={selectedVehicle}
                />
              </Box>
              <Box flex={2}>
                <TableComponent
                  vehicles={filteredVehicles}
                  onSelect={handleSelectVehicle}
                  selected={selectedVehicle}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(vehicles.length / ITEMS_PER_PAGE)}
                  onPageChange={handlePageChange}
                />
              </Box>
            </Stack>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default Home;
